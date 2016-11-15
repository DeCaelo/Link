Rails.application.routes.draw do
  mount Attachinary::Engine => "/attachinary"
  devise_for :users
  root to: 'posts#index'
  resources :posts
  get '/profile' => 'users#profile'
  resources :users, only: [ :edit, :update, :destroy ]
end
