memberSearchIndex = [{"p":"com.app.springbackend.controller","c":"BookmarkController","l":"addBookmark(AddBookmarkRequest, UserDetailsImpl)","u":"addBookmark(com.app.springbackend.payload.request.AddBookmarkRequest,com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.payload.request","c":"AddBookmarkRequest","l":"AddBookmarkRequest()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.config","c":"WebConfig","l":"addCorsMappings(CorsRegistry)","u":"addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry)"},{"p":"com.app.springbackend.controller","c":"TestController","l":"adminAccess()"},{"p":"com.app.springbackend.config","c":"ApplicationConfig","l":"ApplicationConfig()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.controller","c":"AuthenticationController","l":"authenticate(AuthenticationRequest)","u":"authenticate(com.app.springbackend.payload.request.AuthenticationRequest)"},{"p":"com.app.springbackend.security.services","c":"AuthenticationService","l":"authenticate(UserDetailsImpl)","u":"authenticate(com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.controller","c":"AuthenticationController","l":"AuthenticationController()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.config","c":"ApplicationConfig","l":"authenticationManager(AuthenticationConfiguration)","u":"authenticationManager(org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration)"},{"p":"com.app.springbackend.config","c":"ApplicationConfig","l":"authenticationProvider()"},{"p":"com.app.springbackend.payload.request","c":"AuthenticationRequest","l":"AuthenticationRequest()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.services","c":"AuthenticationService","l":"AuthenticationService()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.controller","c":"BookmarkController","l":"BookmarkController()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsImpl","l":"build(User)","u":"build(com.app.springbackend.model.user.User)"},{"p":"com.app.springbackend.security.jwt","c":"JwtAuthEntryPoint","l":"commence(HttpServletRequest, HttpServletResponse, AuthenticationException)","u":"commence(jakarta.servlet.http.HttpServletRequest,jakarta.servlet.http.HttpServletResponse,org.springframework.security.core.AuthenticationException)"},{"p":"com.app.springbackend.service","c":"UserBookmarkService","l":"createBookmark(AddBookmarkRequest, Long)","u":"createBookmark(com.app.springbackend.payload.request.AddBookmarkRequest,java.lang.Long)"},{"p":"com.app.springbackend.security.services","c":"TokenRefreshService","l":"createRefreshToken(Long)","u":"createRefreshToken(java.lang.Long)"},{"p":"com.app.springbackend.controller","c":"BookmarkController","l":"deleteBookmark(Long, UserDetailsImpl)","u":"deleteBookmark(java.lang.Long,com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.service","c":"UserBookmarkService","l":"deleteById(Long, Long)","u":"deleteById(java.lang.Long,java.lang.Long)"},{"p":"com.app.springbackend.repo","c":"UserRefreshTokenRepository","l":"deleteByUser(User)","u":"deleteByUser(com.app.springbackend.model.user.User)"},{"p":"com.app.springbackend.security.services","c":"TokenRefreshService","l":"deleteByUserId(Long)","u":"deleteByUserId(java.lang.Long)"},{"p":"com.app.springbackend.security.jwt","c":"JwtAuthFilter","l":"doFilterInternal(HttpServletRequest, HttpServletResponse, FilterChain)","u":"doFilterInternal(jakarta.servlet.http.HttpServletRequest,jakarta.servlet.http.HttpServletResponse,jakarta.servlet.FilterChain)"},{"p":"com.app.springbackend.advice","c":"ErrorMessage","l":"ErrorMessage()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.repo","c":"UserRepository","l":"existsByUserEmail(String)","u":"existsByUserEmail(java.lang.String)"},{"p":"com.app.springbackend.repo","c":"UserRepository","l":"existsByUsername(String)","u":"existsByUsername(java.lang.String)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"extractClaim(String, Function<Claims, T>)","u":"extractClaim(java.lang.String,java.util.function.Function)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"extractUsername(String)","u":"extractUsername(java.lang.String)"},{"p":"com.app.springbackend.repo","c":"UserBookmarkRepository","l":"findAllByUserId(Long)","u":"findAllByUserId(java.lang.Long)"},{"p":"com.app.springbackend.service","c":"UserBookmarkService","l":"findAllByUserId(Long)","u":"findAllByUserId(java.lang.Long)"},{"p":"com.app.springbackend.repo","c":"UserRoleRepository","l":"findByRoleName(EUserRole)","u":"findByRoleName(com.app.springbackend.model.user.EUserRole)"},{"p":"com.app.springbackend.repo","c":"UserRefreshTokenRepository","l":"findByToken(String)","u":"findByToken(java.lang.String)"},{"p":"com.app.springbackend.security.services","c":"TokenRefreshService","l":"findByToken(String)","u":"findByToken(java.lang.String)"},{"p":"com.app.springbackend.repo","c":"UserRepository","l":"findByUsername(String)","u":"findByUsername(java.lang.String)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"generateRefreshTokenCookie(String)","u":"generateRefreshTokenCookie(java.lang.String)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"generateToken(Map<String, Object>, UserDetailsImpl)","u":"generateToken(java.util.Map,com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"generateToken(UserDetailsImpl)","u":"generateToken(com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"generateTokenCookie(User)","u":"generateTokenCookie(com.app.springbackend.model.user.User)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"generateTokenCookie(UserDetailsImpl)","u":"generateTokenCookie(com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.controller","c":"BookmarkController","l":"getAllBookmarks(UserDetailsImpl)","u":"getAllBookmarks(com.app.springbackend.security.services.UserDetailsImpl)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"getCleanRefreshTokenCookie()"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"getCleanTokenCookie()"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"getRefreshTokenFromCookies(HttpServletRequest)","u":"getRefreshTokenFromCookies(jakarta.servlet.http.HttpServletRequest)"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"getTokenFromCookies(HttpServletRequest)","u":"getTokenFromCookies(jakarta.servlet.http.HttpServletRequest)"},{"p":"com.app.springbackend.advice","c":"TokenControllerAdvice","l":"handleTokenRefreshException(TokenRefreshException, WebRequest)","u":"handleTokenRefreshException(com.app.springbackend.exception.TokenRefreshException,org.springframework.web.context.request.WebRequest)"},{"p":"com.app.springbackend.security.services","c":"UserDetailsImpl","l":"isAccountNonExpired()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsImpl","l":"isAccountNonLocked()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsImpl","l":"isCredentialsNonExpired()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsImpl","l":"isEnabled()"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"isTokenValid(String)","u":"isTokenValid(java.lang.String)"},{"p":"com.app.springbackend.security.jwt","c":"JwtAuthEntryPoint","l":"JwtAuthEntryPoint()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.jwt","c":"JwtAuthFilter","l":"JwtAuthFilter()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.jwt","c":"JwtUtils","l":"JwtUtils()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsServiceImpl","l":"loadUserByUsername(String)","u":"loadUserByUsername(java.lang.String)"},{"p":"com.app.springbackend.controller","c":"AuthenticationController","l":"logout()"},{"p":"com.app.springbackend","c":"SpringbootBackendApplication","l":"main(String[])","u":"main(java.lang.String[])"},{"p":"com.app.springbackend.payload.response","c":"MessageResponse","l":"MessageResponse()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.controller","c":"TestController","l":"moderatorAccess()"},{"p":"com.app.springbackend.config","c":"ApplicationConfig","l":"passwordEncoder()"},{"p":"com.app.springbackend.controller","c":"TestController","l":"publicAccess()"},{"p":"com.app.springbackend.controller","c":"AuthenticationController","l":"refreshToken(TokenRefreshRequest)","u":"refreshToken(com.app.springbackend.payload.request.TokenRefreshRequest)"},{"p":"com.app.springbackend.controller","c":"AuthenticationController","l":"register(RegisterRequest)","u":"register(com.app.springbackend.payload.request.RegisterRequest)"},{"p":"com.app.springbackend.security.services","c":"AuthenticationService","l":"register(RegisterRequest)","u":"register(com.app.springbackend.payload.request.RegisterRequest)"},{"p":"com.app.springbackend.payload.request","c":"RegisterRequest","l":"RegisterRequest()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.model.user","c":"EUserRole","l":"ROLE_ADMIN"},{"p":"com.app.springbackend.model.user","c":"EUserRole","l":"ROLE_MODERATOR"},{"p":"com.app.springbackend.model.user","c":"EUserRole","l":"ROLE_USER"},{"p":"com.app.springbackend.security.config","c":"SecurityConfig","l":"SecurityConfig()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.config","c":"SecurityConfig","l":"securityFilterChain(HttpSecurity)","u":"securityFilterChain(org.springframework.security.config.annotation.web.builders.HttpSecurity)"},{"p":"com.app.springbackend","c":"SpringbootBackendApplication","l":"SpringbootBackendApplication()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.controller","c":"TestController","l":"TestController()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.advice","c":"TokenControllerAdvice","l":"TokenControllerAdvice()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.exception","c":"TokenRefreshException","l":"TokenRefreshException(String, String)","u":"%3Cinit%3E(java.lang.String,java.lang.String)"},{"p":"com.app.springbackend.payload.request","c":"TokenRefreshRequest","l":"TokenRefreshRequest()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.payload.response","c":"TokenRefreshResponse","l":"TokenRefreshResponse()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.services","c":"TokenRefreshService","l":"TokenRefreshService()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.model.user","c":"User","l":"User()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.controller","c":"TestController","l":"userAccess()"},{"p":"com.app.springbackend.model.bookmark","c":"UserBookmark","l":"UserBookmark()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.service","c":"UserBookmarkService","l":"UserBookmarkService()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsImpl","l":"UserDetailsImpl()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.security.services","c":"UserDetailsServiceImpl","l":"UserDetailsServiceImpl()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.payload.response","c":"UserInfoResponse","l":"UserInfoResponse()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.model.user","c":"UserRefreshToken","l":"UserRefreshToken()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.model.user","c":"UserRole","l":"UserRole()","u":"%3Cinit%3E()"},{"p":"com.app.springbackend.model.user","c":"EUserRole","l":"valueOf(String)","u":"valueOf(java.lang.String)"},{"p":"com.app.springbackend.model.user","c":"EUserRole","l":"values()"},{"p":"com.app.springbackend.security.services","c":"TokenRefreshService","l":"verifyRefreshTokenExpiration(UserRefreshToken)","u":"verifyRefreshTokenExpiration(com.app.springbackend.model.user.UserRefreshToken)"},{"p":"com.app.springbackend.config","c":"WebConfig","l":"WebConfig()","u":"%3Cinit%3E()"}];updateSearchResults();