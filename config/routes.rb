Rails.application.routes.draw do

  resources :projects do
    get :dashboard, controller: :modules
    get :spider, controller: :modules

    get 'dirb', controller: :dirb, action: :index
    get 'dirb/run', controller: :dirb, action: :run
    post 'dirb/reset', controller: :dirb, action: :reset
  end

  resources :modules, only: [:index]
  root 'pages#index'

end
