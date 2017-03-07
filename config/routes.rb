Rails.application.routes.draw do

  get ':root', to: 'pages#index'
  resources :projects
  root 'pages#index'

end
