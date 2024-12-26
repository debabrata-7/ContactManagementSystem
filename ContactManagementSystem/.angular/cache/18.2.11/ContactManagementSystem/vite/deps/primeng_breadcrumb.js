import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-63AB2P3A.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-5LBI7YNI.js";
import {
  BaseIcon,
  UniqueComponentId,
  zindexutils
} from "./chunk-P52CPWKF.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-QLC5X4XB.js";
import "./chunk-TCUQINYI.js";
import "./chunk-TGP7FQIQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-C3AC6635.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HYXBO2WC.js";
import {
  __spreadValues
} from "./chunk-RTI2E2DI.js";

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(__ngFactoryType__) {
      return (ɵChevronRightIcon_BaseFactory || (ɵChevronRightIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronRightIcon)))(__ngFactoryType__ || _ChevronRightIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronRightIcon,
    selectors: [["ChevronRightIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: "ChevronRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-home.mjs
var HomeIcon = class _HomeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵHomeIcon_BaseFactory;
    return function HomeIcon_Factory(__ngFactoryType__) {
      return (ɵHomeIcon_BaseFactory || (ɵHomeIcon_BaseFactory = ɵɵgetInheritedFactory(_HomeIcon)))(__ngFactoryType__ || _HomeIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _HomeIcon,
    selectors: [["HomeIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function HomeIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeIcon, [{
    type: Component,
    args: [{
      selector: "HomeIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption("tooltipEvent") === "hover") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        } else if (this.getOption("tooltipEvent") === "focus") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption("showDelay")) this.showTimeout = setTimeout(() => {
      this.show();
    }, this.getOption("showDelay"));
    else this.show();
    if (this.getOption("life")) {
      let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body") document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target") DomHandler.appendChild(this.container, this.el.nativeElement);
    else DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto") zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption("tooltipEvent") === "hover") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    } else if (this.getOption("tooltipEvent") === "focus") {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body") document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target") this.el.nativeElement.removeChild(this.container);
      else DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: "escape",
      showDelay: "showDelay",
      hideDelay: "hideDelay",
      life: "life",
      positionTop: "positionTop",
      positionLeft: "positionLeft",
      autoHide: "autoHide",
      fitContent: "fitContent",
      hideOnEscape: "hideOnEscape",
      content: [0, "pTooltip", "content"],
      disabled: [0, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input
    }],
    showDelay: [{
      type: Input
    }],
    hideDelay: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    positionLeft: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    fitContent: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-breadcrumb.mjs
var _c0 = (a0) => ({
  "p-breadcrumb-home": true,
  "p-disabled": a0
});
var _c1 = () => ({
  exact: false
});
var _c2 = (a0) => ({
  "p-disabled": a0
});
var _c3 = (a0) => ({
  $implicit: a0
});
function Breadcrumb_li_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.home.icon)("ngStyle", ctx_r1.home.iprivateyle);
  }
}
function Breadcrumb_li_2_a_1_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "HomeIcon", 17);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-menuitem-icon");
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("innerHTML", ctx_r1.home.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_a_1_ng_container_3_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_li_2_a_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeLabel_r3 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.escape !== false)("ngIfElse", htmlHomeLabel_r3);
  }
}
function Breadcrumb_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("click", function Breadcrumb_li_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, ctx_r1.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_a_1_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_li_2_a_1_HomeIcon_2_Template, 1, 1, "HomeIcon", 14)(3, Breadcrumb_li_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("href", ctx_r1.home.url ? ctx_r1.home.url : null, ɵɵsanitizeUrl)("target", ctx_r1.home.target)("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(ctx_r1.home));
    ɵɵattribute("aria-label", ctx_r1.homeAriaLabel)("title", ctx_r1.home.title)("tabindex", ctx_r1.home.disabled ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.home.icon)("ngStyle", ctx_r1.home.iconStyle);
  }
}
function Breadcrumb_li_2_a_2_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "HomeIcon", 17);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-menuitem-icon");
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("innerHTML", ctx_r1.home.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_a_2_ng_container_3_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_li_2_a_2_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeRouteLabel_r5 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.escape !== false)("ngIfElse", htmlHomeRouteLabel_r5);
  }
}
function Breadcrumb_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 21);
    ɵɵlistener("click", function Breadcrumb_li_2_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, ctx_r1.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_a_2_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_li_2_a_2_HomeIcon_2_Template, 1, 1, "HomeIcon", 14)(3, Breadcrumb_li_2_a_2_ng_container_3_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r1.home.routerLink)("queryParams", ctx_r1.home.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r1.home.routerLinkActiveOptions || ɵɵpureFunction0(18, _c1))("target", ctx_r1.home.target)("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(ctx_r1.home))("fragment", ctx_r1.home.fragment)("queryParamsHandling", ctx_r1.home.queryParamsHandling)("preserveFragment", ctx_r1.home.preserveFragment)("skipLocationChange", ctx_r1.home.skipLocationChange)("replaceUrl", ctx_r1.home.replaceUrl)("state", ctx_r1.home.state);
    ɵɵattribute("aria-label", ctx_r1.homeAriaLabel)("title", ctx_r1.home.title)("tabindex", ctx_r1.home.disabled ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 9);
    ɵɵtemplate(1, Breadcrumb_li_2_a_1_Template, 4, 9, "a", 10)(2, Breadcrumb_li_2_a_2_Template, 4, 19, "a", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.home.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0, ctx_r1.home.disabled))("ngStyle", ctx_r1.home.style)("tooltipOptions", ctx_r1.home.tooltipOptions);
    ɵɵattribute("id", ctx_r1.home.id)("data-pc-section", "home");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.home.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.routerLink);
  }
}
function Breadcrumb_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
}
function Breadcrumb_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 22);
    ɵɵtemplate(1, Breadcrumb_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 15)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r7.icon)("ngStyle", item_r7.iconStyle);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("innerHTML", item_r7.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = ɵɵreference(3);
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.escape !== false)("ngIfElse", htmlLabel_r8);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_1_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_a_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_2_1_Template, 1, 0, null, 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, item_r7));
  }
}
function Breadcrumb_ng_template_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 27);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const item_r7 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event, item_r7));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Breadcrumb_ng_template_4_a_1_ng_container_2_Template, 2, 4, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("target", item_r7.target)("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(item_r7));
    ɵɵattribute("href", item_r7.url ? item_r7.url : null, ɵɵsanitizeUrl)("title", item_r7.title)("tabindex", item_r7.disabled ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r7.icon)("ngStyle", item_r7.iconStyle);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("innerHTML", item_r7.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r10 = ɵɵreference(3);
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.escape !== false)("ngIfElse", htmlRouteLabel_r10);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_1_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_a_2_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_2_1_Template, 1, 0, null, 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, item_r7));
  }
}
function Breadcrumb_ng_template_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 29);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const item_r7 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event, item_r7));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Breadcrumb_ng_template_4_a_2_ng_container_2_Template, 2, 4, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r7.routerLink)("queryParams", item_r7.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r7.routerLinkActiveOptions || ɵɵpureFunction0(16, _c1))("target", item_r7.target)("fragment", item_r7.fragment)("queryParamsHandling", item_r7.queryParamsHandling)("preserveFragment", item_r7.preserveFragment)("skipLocationChange", item_r7.skipLocationChange)("replaceUrl", item_r7.replaceUrl)("state", item_r7.state)("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(item_r7));
    ɵɵattribute("title", item_r7.title)("tabindex", item_r7.disabled ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
}
function Breadcrumb_ng_template_4_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 22);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 15)(2, Breadcrumb_ng_template_4_li_3_2_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 24);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_Template, 3, 7, "a", 25)(2, Breadcrumb_ng_template_4_a_2_Template, 3, 17, "a", 26);
    ɵɵelementEnd();
    ɵɵtemplate(3, Breadcrumb_ng_template_4_li_3_Template, 3, 3, "li", 7);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const end_r11 = ctx.last;
    ɵɵclassMap(item_r7.styleClass);
    ɵɵproperty("ngStyle", item_r7.style)("ngClass", ɵɵpureFunction1(10, _c2, item_r7.disabled))("tooltipOptions", item_r7.tooltipOptions);
    ɵɵattribute("id", item_r7.id)("data-pc-section", "menuitem");
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r7.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", !end_r11);
  }
}
var Breadcrumb = class _Breadcrumb {
  router;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * MenuItem configuration for the home icon.
   * @group Props
   */
  home;
  /**
   * Defines a string that labels the home icon for accessibility.
   * @group Props
   */
  homeAriaLabel;
  /**
   * Fired when an item is selected.
   * @param {BreadcrumbItemClickEvent} event - custom click event.
   * @group Emits
   */
  onItemClick = new EventEmitter();
  templates;
  separatorTemplate;
  itemTemplate;
  constructor(router) {
    this.router = router;
  }
  onClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.onItemClick.emit({
      originalEvent: event,
      item
    });
  }
  onHomeClick(event) {
    if (this.home) {
      this.onClick(event, this.home);
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "separator":
          this.separatorTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  isCurrentUrl(item) {
    const {
      routerLink
    } = item;
    const lastPath = this.router ? this.router.url : "";
    return routerLink === lastPath ? "page" : void 0;
  }
  static ɵfac = function Breadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Breadcrumb)(ɵɵdirectiveInject(Router));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Breadcrumb,
    selectors: [["p-breadcrumb"]],
    contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      home: "home",
      homeAriaLabel: "homeAriaLabel"
    },
    outputs: {
      onItemClick: "onItemClick"
    },
    decls: 5,
    vars: 10,
    consts: [["htmlHomeLabel", ""], ["htmlHomeRouteLabel", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngStyle", "ngClass"], [1, "p-breadcrumb-list"], ["pTooltip", "", 3, "class", "ngClass", "ngStyle", "tooltipOptions", 4, "ngIf"], ["class", "p-menuitem-separator", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngClass", "ngStyle", "tooltipOptions"], ["class", "p-menuitem-link", 3, "href", "target", "ariaCurrentWhenActive", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ariaCurrentWhenActive", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "click", "href", "target", "ariaCurrentWhenActive"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [3, "styleClass"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-link", 3, "click", "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ariaCurrentWhenActive", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-menuitem-separator"], [4, "ngTemplateOutlet"], ["pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", 3, "target", "ariaCurrentWhenActive", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "ariaCurrentWhenActive", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "click", "target", "ariaCurrentWhenActive"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-menuitem-link", 3, "click", "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "ariaCurrentWhenActive"]],
    template: function Breadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "nav", 4)(1, "ol", 5);
        ɵɵtemplate(2, Breadcrumb_li_2_Template, 3, 11, "li", 6)(3, Breadcrumb_li_3_Template, 3, 3, "li", 7)(4, Breadcrumb_ng_template_4_Template, 4, 12, "ng-template", 8);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-breadcrumb p-component");
        ɵɵattribute("data-pc-name", "breadcrumb")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "menu");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.home);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.model && ctx.home);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, ChevronRightIcon, HomeIcon],
    styles: ["@layer primeng{.p-breadcrumb{overflow-x:auto}.p-breadcrumb .p-breadcrumb-list{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;display:flex;align-items:center}.p-breadcrumb .p-menuitem-separator{display:flex;align-items:center}.p-breadcrumb::-webkit-scrollbar{display:none}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{
      selector: "p-breadcrumb",
      template: `
        <nav [class]="styleClass" [ngStyle]="style" [ngClass]="'p-breadcrumb p-component'" [attr.data-pc-name]="'breadcrumb'" [attr.data-pc-section]="'root'">
            <ol [attr.data-pc-section]="'menu'" class="p-breadcrumb-list">
                <li
                    [class]="home.styleClass"
                    [attr.id]="home.id"
                    [ngClass]="{ 'p-breadcrumb-home': true, 'p-disabled': home.disabled }"
                    [ngStyle]="home.style"
                    *ngIf="home"
                    pTooltip
                    [tooltipOptions]="home.tooltipOptions"
                    [attr.data-pc-section]="'home'"
                >
                    <a
                        [href]="home.url ? home.url : null"
                        *ngIf="!home.routerLink"
                        [attr.aria-label]="homeAriaLabel"
                        class="p-menuitem-link"
                        (click)="onClick($event, home)"
                        [target]="home.target"
                        [attr.title]="home.title"
                        [attr.tabindex]="home.disabled ? null : '0'"
                        [ariaCurrentWhenActive]="isCurrentUrl(home)"
                    >
                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon" [ngStyle]="home.iprivateyle"></span>
                        <HomeIcon *ngIf="!home.icon" [styleClass]="'p-menuitem-icon'" />
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeLabel" class="p-menuitem-text">{{ home.label }}</span>
                            <ng-template #htmlHomeLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                    <a
                        *ngIf="home.routerLink"
                        [routerLink]="home.routerLink"
                        [attr.aria-label]="homeAriaLabel"
                        [queryParams]="home.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"
                        class="p-menuitem-link"
                        (click)="onClick($event, home)"
                        [target]="home.target"
                        [attr.title]="home.title"
                        [attr.tabindex]="home.disabled ? null : '0'"
                        [ariaCurrentWhenActive]="isCurrentUrl(home)"
                        [fragment]="home.fragment"
                        [queryParamsHandling]="home.queryParamsHandling"
                        [preserveFragment]="home.preserveFragment"
                        [skipLocationChange]="home.skipLocationChange"
                        [replaceUrl]="home.replaceUrl"
                        [state]="home.state"
                    >
                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon" [ngStyle]="home.iconStyle"></span>
                        <HomeIcon *ngIf="!home.icon" [styleClass]="'p-menuitem-icon'" />
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" class="p-menuitem-text">{{ home.label }}</span>
                            <ng-template #htmlHomeRouteLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                </li>
                <li *ngIf="model && home" class="p-menuitem-separator" [attr.data-pc-section]="'separator'">
                    <ChevronRightIcon *ngIf="!separatorTemplate" />
                    <ng-template *ngTemplateOutlet="separatorTemplate"></ng-template>
                </li>
                <ng-template ngFor let-item let-end="last" [ngForOf]="model">
                    <li [class]="item.styleClass" [attr.id]="item.id" [ngStyle]="item.style" [ngClass]="{ 'p-disabled': item.disabled }" pTooltip [tooltipOptions]="item.tooltipOptions" [attr.data-pc-section]="'menuitem'">
                        <a
                            *ngIf="!item.routerLink"
                            [attr.href]="item.url ? item.url : null"
                            class="p-menuitem-link"
                            (click)="onClick($event, item)"
                            [target]="item.target"
                            [attr.title]="item.title"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [ariaCurrentWhenActive]="isCurrentUrl(item)"
                        >
                            <ng-container *ngIf="!itemTemplate">
                                <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                <ng-container *ngIf="item.label">
                                    <span *ngIf="item.escape !== false; else htmlLabel" class="p-menuitem-text">{{ item.label }}</span>
                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                </ng-container>
                            </ng-container>
                            <ng-container *ngIf="itemTemplate">
                                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="item.routerLink"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActive]="'p-menuitem-link-active'"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            class="p-menuitem-link"
                            (click)="onClick($event, item)"
                            [target]="item.target"
                            [attr.title]="item.title"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                            [ariaCurrentWhenActive]="isCurrentUrl(item)"
                        >
                            <ng-container *ngIf="!itemTemplate">
                                <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                <ng-container *ngIf="item.label">
                                    <span *ngIf="item.escape !== false; else htmlRouteLabel" class="p-menuitem-text">{{ item.label }}</span>
                                    <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                </ng-container>
                            </ng-container>
                            <ng-container *ngIf="itemTemplate">
                                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
                            </ng-container>
                        </a>
                    </li>
                    <li *ngIf="!end" class="p-menuitem-separator" [attr.data-pc-section]="'separator'">
                        <ChevronRightIcon *ngIf="!separatorTemplate" />
                        <ng-template *ngTemplateOutlet="separatorTemplate"></ng-template>
                    </li>
                </ng-template>
            </ol>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-breadcrumb{overflow-x:auto}.p-breadcrumb .p-breadcrumb-list{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;display:flex;align-items:center}.p-breadcrumb .p-menuitem-separator{display:flex;align-items:center}.p-breadcrumb::-webkit-scrollbar{display:none}}\n"]
    }]
  }], () => [{
    type: Router
  }], {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    home: [{
      type: Input
    }],
    homeAriaLabel: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var BreadcrumbModule = class _BreadcrumbModule {
  static ɵfac = function BreadcrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BreadcrumbModule,
    declarations: [Breadcrumb],
    imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule],
    exports: [Breadcrumb, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule],
      exports: [Breadcrumb, RouterModule, TooltipModule, SharedModule],
      declarations: [Breadcrumb]
    }]
  }], null, null);
})();
export {
  Breadcrumb,
  BreadcrumbModule
};
//# sourceMappingURL=primeng_breadcrumb.js.map
