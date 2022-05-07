import React from 'react';
import "./experience.css"

export default function Experience() {
  return (
    <div class="container">
     <div className='header-exp'>
     <div class="timeline-icon"><i class="fa fa-globe"></i></div>
     <h3 class="title">Web Designing</h3>
     </div>   
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline-exp">
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                        <div class="timeline-year">2 Year</div>
                        <h3 class="title">Web Designing</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-icon"><i class="fa fa-mobile" aria-hidden="true"></i></div>
                        <div class="timeline-year">1 Year</div>
                        <h3 class="title">Web Development</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
