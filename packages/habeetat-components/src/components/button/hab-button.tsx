import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hab-button',
  styleUrl: 'hab-button.scss',
  shadow: true,
})
export class HabButton {
  @Prop() color: 'primary'|'secondary' = 'primary';
  @Prop() type: 'filled' | 'bordered' | 'text' = 'filled';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' = 'md';
  @Prop() class: string = '';


  baseClass = 'hab-button';
  colorClass = `--${this.color}`;
  sizeClass = `--${this.size}`;
  typeClass = `--${this.type}`;

  classes = [
    this.baseClass,
    this.colorClass,
    this.sizeClass,
    this.typeClass,
    this.class
  ];

  render() {
    return (
      <Host>
        <button
          type='button'
          class={this.classes.join(' ')}
        >
          Button text
        </button>
      </Host>
    );
  }

}
