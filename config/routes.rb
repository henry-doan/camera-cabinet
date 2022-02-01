Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :kits do 
      resources :gears
    end
    resources :gears, except: [:index, :show, :create, :update, :destroy] do
      resources :documents
    end
  end
  
end