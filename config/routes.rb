Rails.application.routes.draw do
	root to: "schooldetails#index"
	 resources :schooldetails
  
  # get 'schooldetails',to: 'schooldetails#index',as:'school_index'

  # get 'schooldetails/new',to: 'schooldetails#new'

  # get 'schooldetails/:id',to: 'schooldetails#show',as: 'school_find'

  # get 'schooldetails' ,to: 'schooldetails#create'

  # get 'schooldetails/edit/:id',to: 'schooldetails#edit',as: 'school_edit'

  # get 'schooldetails/:id',to: 'schooldetails#update',as: 'school_update'

  # get 'schooldetails/:id',to: 'schooldetails#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
