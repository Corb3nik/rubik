Rails.application.routes.draw do

  resources :ctfs do
    resources :challenges do
      get :dashboard, controller: :modules

      get 'spider', controller: :spider, action: :index
      post 'spider/run', controller: :spider, action: :run

      get 'dirb', controller: :dirb, action: :index
      post 'dirb/run', controller: :dirb, action: :run

      get 'wappalyzer', controller: :wappalyzer, action: :index
      post 'wappalyzer/run', controller: :wappalyzer, action: :run

    end
  end

  resources :modules, only: [:index]
  root 'pages#index'

end
