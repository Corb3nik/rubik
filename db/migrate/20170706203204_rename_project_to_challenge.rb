class RenameProjectToChallenge < ActiveRecord::Migration[5.1]
  def change
    rename_table :projects, :challenges
  end
end
