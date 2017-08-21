class AddCtfIdToChallenges < ActiveRecord::Migration[5.1]
  def change
    add_reference :challenges, :ctf, foreign_key: true
  end
end
