class Document < ApplicationRecord
  belongs_to :gear

  validates :bought, :image, presence: true
end
