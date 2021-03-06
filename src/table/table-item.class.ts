import {
	EventEmitter,
	TemplateRef
} from "@angular/core";

export class TableItem {
	/**
	 * Data for the table item.
	 *
	 * @type {*}
	 * @memberof TableItem
	 */
	data: any;

	/**
	 * Used to display data in a desired way.
	 *
	 * If not provided, displays data as a simple string.
	 *
	 * Usage:
	 *
	 * In a component where you're using the table create a template like:
	 *
	 * ```html
	 * <ng-template #customItemTemplate let-data="data">
	 * 	<i><a [routerLink]="data.link">{{data.name}}</a></i>
	 * </ng-template>
	 * ```
	 * where we assume your data contains `link` and `name`. `let-data="data"` is
	 * necessary for you to be able to access item's data in the template.
	 *
	 * Create `ViewChild` property with:
	 *
	 * ```typescript
	 * (at)ViewChild("customItemTemplate")
	 * private customItemTemplate: TemplateRef<any>;
	 * ```
	 *
	 * Set the template to the table item, for example:
	 *
	 * ```typescript
	 * this.model.data = [
	 * 	[new TableItem({data: {name: "Custom item", link: "/table"}, template: this.customItemTemplate})]
	 * ];
	 * ```
	 *
	 * @type {TemplateRef<any>}
	 * @memberof TableItem
	 */
	template: TemplateRef<any>;

	/**
	 * Creates an instance of TableItem.
	 * @param {*} [rawData]
	 * @memberof TableItem
	 */
	constructor(rawData?: any) {
		// defaults so we dont leave things empty
		const defaults = {
			data: ""
		};
		// fill our object with provided props, and fallback to defaults
		const data = Object.assign({}, defaults, rawData);
		this.data = data.data;
		this.template = data.template;
	}
}
