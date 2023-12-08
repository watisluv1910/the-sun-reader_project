package com.app.backend.payload.user.request

import com.app.backend.model.user.User

data class RegisterRequest(
    val username: String,
    val userEmail: String,
    val password: String,
    val roles: List<String>
) {
    fun toModel(): Pair<User, List<String>> =
        Pair(
            User().also { user ->
                user.username = username
                user.userEmail = userEmail
                user.password = password
            },
            roles
        )
}
