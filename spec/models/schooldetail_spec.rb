require 'rails_helper'
describe "school"  do |variable|

	context "should be params" do
		 subject{ Schooldetail.create(schoolname: "tamil",address: "valechery",city: "chennai",state: "tamilnadu",pincode: 600042,affiliatedboard: "CBSE")
		    
		}
		it "should be create"do
		    expect(subject).to be_valid
		    p subject
		    p subject.id
		end
		# it "is not valid without a schoolname" do
		#  	subject.schoolname = nil
  #           expect(subject).to_not be_valid
  #       end
		it "school be update " do
			 expect(subject).to be_valid
   #          p subject.id
			# u = find(subject.id)
			# p u
			update = subject.update(schoolname: "shaik",city: "nandigama",pincode: 521185)
			  
			 p update
		end
		it "school be record show" do
			create = Schooldetail.all
			p create 
        end

        it "school be record delete" do
            # sucreate = Schooldetail.create!(schoolname: "tamil",address: "valechery",city: "chennai",state: "tamilnadu",pincode: 600042,affiliatedboard: "CBSE")
            # find = Schooldetail.find(id: create.id)
            Schooldetail.destroy(subject.id)
            # u = Schooldetail.find(subject.id)
            # p u
                
        end

        # it "school validation check" do
        # 	create = Schooldetail.create!(schoolname: "tam",address: "valechery",city: "che",state: "tami",pincode:"asddff",affiliatedboard: "CBSE")
        #      p create
        # end

		end
	
end
	


