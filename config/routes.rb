Rails.application.routes.draw do

  get ':root', to: 'pages#index'

  root 'pages#index'

end
