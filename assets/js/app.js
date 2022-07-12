//alert("hello");

let cl= console.log;
let whiterose = document.getElementById("white-rose");
const bgColor = document.querySelector("select");
//cl(bgColor)
let roses = document.getElementById("roses");
let All = document.querySelectorAll(".all");


 

let imgArray =[
{
	img:"https://th.bing.com/th/id/R.6db00f77595c2828fe02c06c3f99d55e?rik=N%2bd7c9lQGCrNkg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-aoK6EvBvkZI%2fUi9QOYlWDAI%2fAAAAAAAAYYI%2fE53uTm07_AM%2fs1600%2fWhite%2bRose%2bWallpapers%2b%2525286%252529.jpg&ehk=1yzqPmIe7THQ1WdNI1CX4HizzWbSgr5okJDWivQIyhg%3d&risl=&pid=ImgRaw&r=0",
	title:"white-rose",
	reting:" 5/5",
	classInfo:"white-rose",
},
{
	img:"https://th.bing.com/th/id/OIP.okVA3ZgUysxfAMpKlHeFggHaJ4?w=143&h=191&c=7&r=0&o=5&pid=1.7",
	title:"red-rose",
	reting:" /5",
	classInfo:"red-rose",
},
{
	img:"https://th.bing.com/th/id/OIP.hkV0lpRd5YonhgToh_rPjQHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7",
	title:"white-rose",
	reting:"5/5",
	classInfo:"white-rose",
},
{
	img:"https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"yellow-rose",
	reting:" 5/5",
	classInfo:"yellow-rose",
},
{
	img:"https://th.bing.com/th/id/OIP.hkV0lpRd5YonhgToh_rPjQHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7",
	title:"white-rose",
	reting:"5/5",
	classInfo:"white-rose",
},
{
	img:"https://images.pexels.com/photos/1248735/pexels-photo-1248735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"pink-rose",
	reting:"5/5",
	classInfo:"pink-rose",
},
{
	img:"https://th.bing.com/th/id/OIP.1AQugf2ssi8nnB5P0_80FgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
	title:"red-rose",
	reting:"5/5",
	classInfo:"red-rose",
},
{
	img:"https://th.bing.com/th/id/OIP.5LtwgmtzsreIUZUes0nGaQHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7",
	title:"white-rose",
	reting:"5/5",
	classInfo:"white-rose",
},
{
	img:"https://images.pexels.com/photos/1248735/pexels-photo-1248735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"pink-rose",
	reting:"5/5",
	classInfo:"pink-rose",
},
{
	img:"https://images.pexels.com/photos/4899537/pexels-photo-4899537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"pink-rose",
	reting:"5/5",
	classInfo:"pink-rose",
},
{
	img:"https://images.pexels.com/photos/209004/pexels-photo-209004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"yellow-rose",
	reting:"5/5",
	classInfo:"yellow-rose",
},
{
	img:"https://images.pexels.com/photos/5371191/pexels-photo-5371191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"pink-rose",
	reting:"5/5",
	classInfo:"pink-rose",
},
{
	img:"https://th.bing.com/th/id/OIP.MCfjWr6UOG51x7Qufv0dXwHaFj?w=252&h=189&c=7&r=0&o=5&pid=1.7",
	title:"red-rose",
	reting:"5/5",
	classInfo:"red-rose",
},
{
	img:"https://images.pexels.com/photos/5732448/pexels-photo-5732448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	title:"yellow-rose",
	reting:"5/5",
	classInfo:"yellow-rose",
},
]
let result ="";
createGallary(imgArray);

bgColor.addEventListener('change',bgchange);
function bgchange(e){
	let classValue = e.target.value;
	let whiteArr =[];
	result="";
	if( classValue !="all"){
		imgArray.forEach((ele, i) =>{
			
		if ( ele.classInfo == classValue){
			whiteArr.push(ele);
		}
		
		
		
	})
	}else{
		createGallary(imgArray);
	}
	
	
	createGallary(whiteArr);
	cl(whiteArr)
}

//	<div class="col-sm-4 mt-3 all white-rose">
//					<div class="card">
//						<div class="card-body">
//							<figure class="rose-images">
//								<img src="https://th.bing.com/th/id/R.6db00f77595c2828fe02c06c3f99d55e?rik=N%2bd7c9lQGCrNkg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-aoK6EvBvkZI%2fUi9QOYlWDAI%2fAAAAAAAAYYI%2fE53uTm07_AM%2fs1600%2fWhite%2bRose%2bWallpapers%2b%2525286%252529.jpg&ehk=1yzqPmIe7THQ1WdNI1CX4HizzWbSgr5okJDWivQIyhg%3d&risl=&pid=ImgRaw&r=0" alt="" class="img-fluid">
//								<figcaption class="img-info">
//									<h2> white-rose</h2>
//									<span> rating 5/5</span>
//								</figcaption>
//							</figure>-->
//						</div>
//					</div>
//				</div>



function createGallary(arr){
arr.forEach(ele =>{
	result +=`<div class="col-sm-4 mt-3 all ${ele.classInfo}">
					<div class="card">
						<div class="card-body">
							<figure class="rose-images">
								<img src="${ele.img}" alt="" class="img-fluid">
								<figcaption class="img-info">
									<h2>${ele.title}</h2>
									<span> rating:${ele.reting} </span>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>`
})	
roses.innerHTML = result;
}






  



  