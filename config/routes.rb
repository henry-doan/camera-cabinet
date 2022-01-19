Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :kits do
      resources :gears
  end
  end

  # namespace :api do
  #   resources :gears
  # end

end
