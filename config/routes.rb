ChimeforChange::Application.routes.draw do
  resources :villages, only: [:index]
end
