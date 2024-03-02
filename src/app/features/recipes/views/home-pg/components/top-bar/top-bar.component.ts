import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  title: string | undefined = 'Recipe List';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.url.subscribe(() => {
      this.title = formatTitle(
        this.activatedRoute.snapshot.firstChild?.routeConfig?.path
      );
    });
    function formatTitle(s: string | undefined) {
      return (
        s
          // Split the string into an array of words if it contains "-"
          ?.split('-')
          // Map over each word
          .map(
            (word) =>
              // Capitalize the first letter of each word and add the rest of the letters
              word.charAt(0).toUpperCase() + word.slice(1)
          )
          // Join the words back into a string, with a space between each word
          .join(' ')
      );
    }
  }
}
