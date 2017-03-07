Rails.application.routes.draw do

  get ':root', to: 'pages#index'
  resources :projects do
    get :spider, controller: :modules
    get :dirb, controller: :modules
  end
  root 'pages#index'

end
