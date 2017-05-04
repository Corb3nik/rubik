Rails.application.routes.draw do

  resources :projects do
    get :dashboard, controller: :modules
    get :spider, controller: :modules
    get :dirb, controller: :modules
  end

  resources :modules, only: [:index]
  root 'pages#index'

end
