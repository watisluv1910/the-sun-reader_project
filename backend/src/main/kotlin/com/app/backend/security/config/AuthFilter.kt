package com.app.backend.security.config

import com.app.backend.repo.UserRepository
import com.app.backend.security.token.TokenUtils
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.lang.NonNull
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException

/**
 * This filter is used for JWT token authentication filtering.
 *
 * Extends [OncePerRequestFilter] to guarantee a single execution per request dispatch.
 */
@Component
class AuthFilter(
    val tokenUtils: TokenUtils,
    val userRepository: UserRepository,
    val authManager: AuthManager
) : OncePerRequestFilter() {

    /**
     * Checks if the request has a valid JWT token attached via cookies.
     * Sets the authentication in the security context if access token is valid.
     *
     * @param request [HttpServletRequest].
     * @param response [HttpServletResponse].
     * @param filterChain [FilterChain] to call the next filter in the chain.
     *
     * @throws ServletException in case of general servlet exception.
     * @throws IOException in case of an I/O error.
     *
     * @see OncePerRequestFilter
     */
    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(
        @NonNull request: HttpServletRequest,
        @NonNull response: HttpServletResponse,
        @NonNull filterChain: FilterChain
    ) {
        try {
            val token = tokenUtils.getAccessTokenFromCookies(request)
            if (!token.isNullOrEmpty()
                && tokenUtils.validateToken(token)
                && SecurityContextHolder.getContext().authentication == null
            ) {
                val foundUser = userRepository.findOneByUsername(tokenUtils.extractUsername(token))
                val authentication = authManager.authenticate(
                    UsernamePasswordAuthenticationToken.unauthenticated(
                        foundUser.username,
                        foundUser.password
                    ).apply {
                        details = WebAuthenticationDetailsSource().buildDetails(request)
                    }
                )
                SecurityContextHolder.getContext().authentication = authentication
            }
        } catch (ex: Exception) {
            logger.error("Cannot set user authentication: ${ex.message}")
        }
        filterChain.doFilter(request, response)
    }
}
