Rails.application.routes.draw do

  resources :projects do
    get :dashboard, controller: :modules
    get :spider, controller: :modules

    post 'dirb/run', controller: :dirb, action: :run
    post 'dirb/reset', controller: :dirb, action: :reset
  end

  resources :modules, only: [:index]
  root 'pages#index'

end
