import '@vaadin/app-layout';
import { AppLayout } from '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/avatar';
import '@vaadin/icon';
import '@vaadin/menu-bar';
import '@vaadin/scroller';
import '@vaadin/side-nav';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from '../index.js';
import { appStore } from '../stores/app-store.js';
import { Layout } from './view.js';

interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

@customElement('main-layout')
export class MainLayout extends Layout {
  render() {
    return html`
      <vaadin-app-layout primary-section="drawer">
        <header slot="drawer">
          <h1 class="text-l m-0">${appStore.applicationName}</h1>
        </header>
        <vaadin-scroller slot="drawer" scroll-direction="vertical">
          <vaadin-side-nav aria-label="${appStore.applicationName}">
            ${this.getMenuRoutes().map(
              (viewRoute) => html`
                <vaadin-side-nav-item path=${router.urlForPath(viewRoute.path)}>
                  <span
                    class="navicon"
                    style="--mask-image: url('line-awesome/svg/${viewRoute.icon}.svg')"
                    slot="prefix"
                    aria-hidden="true"
                  ></span>
                  ${viewRoute.title}
                </vaadin-side-nav-item>
              `
            )}
          </vaadin-side-nav>
        </vaadin-scroller>

        <footer slot="drawer"></footer>

        <vaadin-drawer-toggle slot="navbar" aria-label="Menu toggle"></vaadin-drawer-toggle>
        <h2 slot="navbar" class="text-l m-0">${appStore.currentViewTitle}</h2>

        <slot></slot>
      </vaadin-app-layout>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('block', 'h-full');
    this.reaction(
      () => appStore.location,
      () => {
        AppLayout.dispatchCloseOverlayDrawerEvent();
      }
    );
  }

  private getMenuRoutes(): RouteInfo[] {
    return [
      {
        path: 'hello',
        title: 'Hello World',
        icon: 'globe-solid',
      },

      {
        path: 'about',
        title: 'About',
        icon: 'file',
      },

      {
        path: 'image-list',
        title: 'Image List',
        icon: 'th-list-solid',
      },

      {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'chart-area-solid',
      },

      {
        path: 'list',
        title: 'List',
        icon: 'th-solid',
      },

      {
        path: 'map',
        title: 'Map',
        icon: 'map',
      },

      {
        path: 'spreadsheet',
        title: 'Spreadsheet',
        icon: 'file-excel',
      },

      {
        path: 'rich-text-editor',
        title: 'Rich Text Editor',
        icon: 'edit',
      },

      {
        path: 'empty',
        title: 'Empty',
        icon: 'file',
      },

      {
        path: 'card-list',
        title: 'Card List',
        icon: 'list-solid',
      },

      {
        path: 'master-detail',
        title: 'Master-Detail',
        icon: 'columns-solid',
      },

      {
        path: 'collaborative-master-detail',
        title: 'Collaborative Master-Detail',
        icon: 'columns-solid',
      },

      {
        path: 'person-form',
        title: 'Person Form',
        icon: 'user',
      },

      {
        path: 'address-form',
        title: 'Address Form',
        icon: 'map-marker-solid',
      },

      {
        path: 'credit-card-form',
        title: 'Credit Card Form',
        icon: 'credit-card',
      },

      {
        path: 'chat',
        title: 'Chat',
        icon: 'comments',
      },

      {
        path: 'checkout-form',
        title: 'Checkout Form',
        icon: 'credit-card',
      },

      {
        path: 'grid-with-filters',
        title: 'Grid with Filters',
        icon: 'filter-solid',
      },

      {
        path: 'hello-world',
        title: 'Hello World2',
        icon: 'globe-solid',
      },

      {
        path: 'master-detail2',
        title: 'Master-Detail2',
        icon: 'columns-solid',
      },

      {
        path: 'hello-world2',
        title: 'Hello World3',
        icon: 'globe-solid',
      },

      {
        path: 'master-detail3',
        title: 'Master-Detail3',
        icon: 'columns-solid',
      },
    ];
  }
}
