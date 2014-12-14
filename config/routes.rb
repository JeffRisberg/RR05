Rails.application.routes.draw do

  resources :answers

  resources :questions

  get 'home/index'

  root 'home#index'

  controller :answers do
    get '/answers/for_question/:id', to: 'answers#for_question'
  end

end
