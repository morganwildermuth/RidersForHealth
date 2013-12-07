ChimeforChange::Application.routes.draw do
  resources :villages, only: [:index, :show, :new]
end
