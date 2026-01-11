import { Component, computed, input } from '@angular/core';
import { IconName, ICON_PATHS } from '../icons.paths';

/**
 * SiIcon
 *
 * Angular component to render a semantic SVG icon.
 * 
 * The component selects an icon from `ICON_PATHS` based on the name
 * passed through the `si-icon` input. Supports solid and outline icons,
 * and allows customization of size, stroke color, and stroke width.
 *
 * Usage example:
 * ```html
 * <svg si-icon="home" size="24" stroke="red" strokeWidth="2"></svg>
 * ```
 *
 * **Inputs:**
 * - `si-icon` (`IconName`): Name of the icon to render. Only icons defined in
 *   `ICON_PATHS` are allowed (e.g., 'home', 'chevron-right').
 * - `size` (`number | string`): SVG size in pixels. Default: `20`.
 * - `stroke` (`string`): Stroke color for outline icons. Default: `'currentColor'`.
 * - `strokeWidth` (`number`): Stroke width for outline icons. Default: `2`.
 *
 * **Notes:**
 * - Solid icons ignore `stroke` and `strokeWidth`.
 * - Outline icons use `stroke` and `strokeWidth` for rendering.
 *
 * @example
 * <svg si-icon="chevron-right" size="16" stroke="blue" strokeWidth="1.5"></svg>
 * @author CarlesRa
 */
@Component({
  selector: 'svg[si-icon]',
  standalone: true,
  template: `
    <svg:path
      [attr.d]="info().d"
      [attr.stroke]="info().isSolid ? 'none' : stroke()"
      [attr.fill]="info().isSolid ? 'currentColor' : 'none'"
      [attr.stroke-width]="info().isSolid ? 0 : strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `,
  host: {
    '[attr.viewBox]': 'info().viewBox',
    '[attr.width]': 'size()',
    '[attr.height]': 'size()',
  }
})
export class SiIcon {
  readonly name = input.required<IconName>({ alias: 'si-icon' });
  readonly size = input<number | string>(20);
  readonly stroke = input<string>('currentColor');
  readonly strokeWidth = input<number>(2);
  
  protected readonly info = computed(() => ICON_PATHS[this.name()]);
}
