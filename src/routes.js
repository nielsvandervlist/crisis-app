import {Router} from 'ra-fetch'

const backend = Router.api('backend', `${process.env.NEXT_PUBLIC_BACKEND_URL}`)
    .laravel()
    .bearTokenFromCookie('token')
    .loginURL('/login')
    .logoutURL('/logout')
    .csrfURL('/sanctum/csrf-cookie')

    .index('users', '/api/users')
    .show('user', '/api/user')

    .index('posts', '/api/posts')
    .show('posts', '/api/posts/{id}')
    .store('posts', '/api/posts', {form_data: true})
    .delete('posts', '/api/posts/{id}')

    .index('post_types', '/api/post_types')

    .index('companies', '/api/companies')
    .show('companies', '/api/companies/{id}')
    .store('companies', '/api/companies', {form_data: true})
    .delete('companies', '/api/companies/{id}')

    .index('timelines', '/api/timelines')
    .show('timelines', '/api/timelines/{id}')
    .store('timelines', '/api/timelines', {form_data: true})
    .delete('timelines', '/api/timelines/{id}')

    .index('crises', '/api/crises')
    .show('crises', '/api/crises/{id}')
    .store('crises', '/api/crises', {form_data: true})
    .delete('crises', '/api/crises/{id}')
