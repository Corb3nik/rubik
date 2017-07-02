Rails.application.routes.draw do

  resources :projects do
    get :dashboard, controller: :modules
    get :spider, controller: :modules

    get 'dirb', controller: :dirb, action: :index
    post 'dirb/run', controller: :dirb, action: :run
    post 'dirb/reset', controller: :dirb, action: :reset

    get 'wappalyzer', controller: :wappalyzer, action: :index
    post 'wappalyzer/run', controller: :wappalyzer, action: :run
    post 'wappalyzer/reset', controller: :wappalyzer, action: :reset

  end

  resources :modules, only: [:index]
  root 'pages#index'

end
