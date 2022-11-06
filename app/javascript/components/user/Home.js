import React from "react";

const Home = () => {
    const btnStyle = {
        display: "inline-block",
        marginRight: "15px",
        padding: "10px 30px",
        border: "2px solid #000",
        color: "#000",
        lineHeight: "1.2",
        textTransform: "uppercase",
        fontSize: "15px"
    }
    return (
        <>
        <div class="container">
            <div id="carousel-home" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" style={{maxHeight: "720px"}}>
                    <div class="carousel-item active">
                        <img src="http://127.0.0.1:8887/reservation-system/img/pic1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="http://127.0.0.1:8887/reservation-system/img/pic2.webp" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="http://127.0.0.1:8887/reservation-system/img/pic3.webp" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div style={{backgroundColor: "#fff4e5", paddingTop: "50px", paddingBottom: "95px"}}>
            <div class="container">
                <div style={{width: "50%", paddingBottom: "50px", display: "inline-block", verticalAlign: "top"}}>
                    <div style={{maxWidth: "270px", maxHeight: "399px", position: "relative", left: "40px", display: "inline-block"}}>
                        <img src="http://127.0.0.1:8887/reservation-system/img/food1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div style={{maxWidth: "270px", maxHeight: "399px", position: "relative", left: "60px" , display: "inline-block", top: "100px"}}>
                        <img src="http://127.0.0.1:8887/reservation-system/img/food2.webp" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <div style={{width: "50%", display: "inline-block"}}>
                    <h2>World Class Food</h2>
                    <h4>Served at your table</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor elit, elementum at est vel, 

                        Sed elementum diam ut enim laoreet, quis faucibus augue venenatis. Integer mattis gravida elit eget consectetur. Donec dignissim in arcu nec consequat.

                        Vestibulum et mauris massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus laoreet massa quis ante interdum congue. Curabitur convallis, nunc ut accumsan dapibus, ex nunc vulputate diam, et gravida neque urna in lacus. Aliquam dignissim ultricies nisl sit amet ullamcorper. Proin nec elit mauris. Morbi tortor orci, consectetur in velit eu, faucibus suscipit ante.

                        Proin vulputate mattis metus, eget sodales mauris semper quis. Sed hendrerit justo ut ipsum facilisis malesuada. Etiam id nunc viverra, faucibus purus a, ultricies lacus. Maecenas eros purus, placerat vel dolor id, finibus egestas libero. Phasellus luctus elit massa. Fusce nunc purus, mattis tristique tortor ut, porta finibus nulla. Donec sapien elit, convallis sed interdum nec, interdum nec metus.
                    </p>
                    <a href="#" style={btnStyle}>See the menu</a>
                </div>
            </div>
        </div>
        <div style={{backgroundColor: "#f2f2f2", paddingTop: "50px", paddingBottom: "50px"}}>
            <div class="container">
                <div style={{width: "50%", display: "inline-block"}}>
                    <h2>World Class Food</h2>
                    <h4>Served at your table</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor elit, elementum at est vel, 

                        Sed elementum diam ut enim laoreet, quis faucibus augue venenatis. Integer mattis gravida elit eget consectetur. Donec dignissim in arcu nec consequat.

                        Vestibulum et mauris massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus laoreet massa quis ante interdum congue. Curabitur convallis, nunc ut accumsan dapibus, ex nunc vulputate diam, et gravida neque urna in lacus. Aliquam dignissim ultricies nisl sit amet ullamcorper. Proin nec elit mauris. Morbi tortor orci, consectetur in velit eu, faucibus suscipit ante.

                        Proin vulputate mattis metus, eget sodales mauris semper quis. Sed hendrerit justo ut ipsum facilisis malesuada. 
                    </p>
                    <a href="#" style={btnStyle}>Reserve Now</a>
                </div>
                <div style={{width: "50%", paddingBottom: "50px", display: "inline-block", verticalAlign: "top"}}>
                    <div style={{maxWidth: "570px", maxHeight: "160px", position: "relative", left: "70px", top: "60px", display: "inline-block"}}>
                        <img src="http://127.0.0.1:8887/reservation-system/img/table1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div style={{maxWidth: "570px", maxHeight: "160px", position: "relative", left: "140px" , display: "inline-block", top: "80px"}}>
                        <img src="http://127.0.0.1:8887/reservation-system/img/table2.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home