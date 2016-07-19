
import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";


@Component({
    selector:'courses-list',
    directives: [ROUTER_DIRECTIVES],
    template: `
            <table class="courses-list card card-strong">
                <tr *ngFor="let course of courses">
                    <td>
                        <img class="lesson-logo" 
                        src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td class="description">
                        {{course.description}}    
                    </td>
                    <td>
                        <button (click)="openCourse(course)">View</button>
                    </td>
                </tr>
           </table>

        `
})
export class CoursesList {


    @Input()
    courses = [];


    constructor(private router:Router, private route: ActivatedRoute) {

    }


    openCourse(course) {

        this.router.navigate([course.id], {relativeTo: this.route});

    }
    

}








