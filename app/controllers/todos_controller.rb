class TodosController < ApplicationController

  def index
    @todos = Todo.all

    render 'todos/index'
  end


end