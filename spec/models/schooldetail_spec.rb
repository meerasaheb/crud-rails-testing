require 'rails_helper'
describe "school"  do |variable|

	context "should be record" do
		  subject{ Schooldetail.create(schoolname: "tamil",address: "valechery",city: "chennai",state: "tamilnadu",pincode: 600042,affiliatedboard: "CBSE")
		    
		}
		it "should be create"do
		    # create = Schooldetail.create!(schoolname: "tamil",address: "valechery",city: "chennai",state: "tamilnadu",pincode: 600042,affiliatedboard: "CBSE")
		    # p create
		    expect(subject).to be_valid
		    p subject
		    p subject.id
		end
		 it "is not valid without a title" do

            subject.schoolname = nil
            expect(subject).to_not be_valid
            end
		# it "school be update " do
		# 	create = Schooldetail.create!(schoolname: "meerasaheb",address: "moguluru",city: "vijayawda",state: "andrapradsh",pincode: 521180,affiliatedboard: "State Board")
		# 	p create
		# 	u = Schooldetail.find(create.id)
		# 	p u
		# 	# update = Schooldetail.update(find,schoolname: "shaik",city: "nandigama",pincode: 521185)
		# 	# p update
		# end
		# it "school be record show" do
		# 	create = Schooldetail.all
		# 	p create 
  #       end

        # it "school be record delete" do
        #     create = Schooldetail.create!(schoolname: "tamil",address: "valechery",city: "chennai",state: "tamilnadu",pincode: 600042,affiliatedboard: "CBSE")
        #     # find = Schooldetail.find(id: create.id)
        #     Schooldetail.destroy(create.id)
        #     u = Schooldetail.find(cretae.id)
        #     p u
                
        # end

        # it "school validation check" do
        # 	create = Schooldetail.create!(schoolname: "tam",address: "valechery",city: "che",state: "tami",pincode:"asddff",affiliatedboard: "CBSE")
        #      p create
        # end

		end
	
end
	


