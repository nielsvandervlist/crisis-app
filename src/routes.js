import {Router} from 'ra-fetch'

const backend = Router.api('backend', `${process.env.NEXT_PUBLIC_BACKEND_URL}`)
    .laravel()
    .bearTokenFromCookie('token')
    .loginURL('/login')
    .logoutURL('/logout')
    .csrfURL('/sanctum/csrf-cookie')

    .index('users', '/api/users')
    .show('user', '/api/user')
    .update('user', '/api/user')

    .index('posts', '/api/posts')
    .show('posts', '/api/posts/{id}')
    .store('posts', '/api/posts', {form_data: true})
    .update('posts', '/api/posts/{id}', {form_data: true})
    .delete('posts', '/api/posts/{id}')

    .index('post_types', '/api/post_types')

    .index('companies', '/api/companies')
    .show('companies', '/api/companies/{id}')
    .store('companies', '/api/companies', {form_data: true})
    .update('companies', '/api/companies/{id}', {form_data: true})
    .delete('companies', '/api/companies/{id}')

    .index('reactions', '/api/reactions')
    .show('reactions', '/api/reactions/{id}')
    .store('reactions', '/api/reactions', {form_data: true})
    .update('reactions', '/api/reactions/{id}', {form_data: true})
    .delete('reactions', '/api/reactions/{id}')

    .index('rapports', '/api/rapports')
    .show('rapports', '/api/rapports/{id}')
    .store('rapports', '/api/rapports', {form_data: true})
    .delete('rapports', '/api/rapports/{id}')

    .index('timelines', '/api/timelines')
    .show('timelines', '/api/timelines/{id}')
    .show('timelines', '/api/timelines/{id}/run')
    .store('timelines', '/api/timelines', {form_data: true})
    .update('timelines', '/api/timelines/{id}', {form_data: true})
    .delete('timelines', '/api/timelines/{id}')

    .index('participants', '/api/participants')
    .show('participants', '/api/participants/{id}')
    .store('participants', '/api/participants', {form_data: true})
    .delete('participants', '/api/participants/{id}')

    .index('notifications', '/api/notifications')
    .show('notifications', '/api/notifications/{id}')
    .store('notifications', '/api/notifications', {form_data: true})
    .update('notifications', '/api/notifications/{id}', {form_data: true})
    .delete('notifications', '/api/notifications/{id}')

    .index('crises', '/api/crises')
    .show('crises', '/api/crises/{id}')
    .store('crises', '/api/crises', {form_data: true})
    .update('crises', '/api/crises/{id}', {form_data: true})
    .delete('crises', '/api/crises/{id}')

    .index('rounds', '/api/rounds')
    .show('rounds', '/api/rounds/{id}')
    .store('rounds', '/api/rounds', {form_data: true})
    .update('rounds', '/api/rounds/{id}', {form_data: true})
    .delete('rounds', '/api/rounds/{id}')

    .index('timeline_posts', '/api/timeline_posts')
    .show('timeline_posts', '/api/timeline_posts/{id}')
    .store('timeline_posts', '/api/timeline_posts', {form_data: true})
    .update('timeline_posts', '/api/timeline_posts/{id}', {form_data: true})
    .delete('timeline_posts', '/api/timeline_posts/{id}')

    .index('documents', '/api/documents')
    .show('documents', '/api/documents/{id}')
    .store('documents', '/api/documents', {form_data: true})
    .update('documents', '/api/documents/{id}', {form_data: true})
    .delete('documents', '/api/documents/{id}')

    .show('messages', '/api/messages/{id}')
    .store('messages', '/api/messages')

    .index('chat_rooms', '/api/chat_rooms')
    .show('chat_rooms', '/api/chat_rooms/{chatRoom}/join')



