Rails.application.routes.draw do

  resources :projects do
    get :spider, controller: :modules
    get :dirb, controller: :modules
  end

  get ':root', to: 'pages#index'
  root 'pages#index'

end
