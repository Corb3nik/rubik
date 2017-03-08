Rails.application.routes.draw do

  resources :projects, defaults: { format: 'json' } do
    get :spider, controller: :modules
    get :dirb, controller: :modules
  end

  root 'pages#index'

end
