import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidemenu',
  imports: [PanelMenu, BadgeModule, PanelMenuModule, Ripple, CommonModule],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.scss'
})
export class Sidemenu implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fas fa-home',
        routerLink: 'dashboard',
        routerLinkActiveOptions: 'active',
        items: []
      },
      {
        label: 'Settings',
        icon: 'fas fa-screwdriver-wrench',
        items: [
          {
            label: 'GEO Location',
            icon: 'fas fa-globe',
            routerLink: 'dashboard',
          },
          {
            label: 'Implementation Partners',
            icon: 'fas fa-users',
            routerLink: 'dashboard',
          },
          {
            label: 'Creating Project',
            icon: 'fas fa-folder',
            routerLink: 'dashboard',
          },
          {
            label: 'Creating Sub Project',
            icon: 'fas fa-file',
            routerLink: 'dashboard',
          },
          {
            label: 'Creating Payment Cycle',
            icon: 'fas fa-money-check-dollar',
            routerLink: 'dashboard',
          }
        ]
      },
      {
        label: 'Beneficiary Management',
        icon: 'fas fa-cogs',
        items: [
          {
            label: 'New Registration',
            icon: 'fas fa-user-plus',
            routerLink: 'dashboard',
          }, {
            label: 'Beneficiary List',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Import from Mobile',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Beneficiary Attendance',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Beneficiary ID Cards',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Job Card',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Work Progress',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'LIPW Export',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }
        ]
      },
      {
        label: 'Payment Management',
        icon: 'fas fa-dollar-sign',
        items: [
          {
            label: 'Creating Wage Request',
            icon: 'fas fa-plus',
            routerLink: 'dashboard',
          }, {
            label: 'Creating Payroll',
            icon: 'fas fa-file-circle-plus',
            routerLink: 'dashboard',
          }, {
            label: 'Payroll Download',
            icon: 'fas fa-download',
            routerLink: 'dashboard',
          }, {
            label: 'Sub Payroll',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Supplementary Payroll',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Payroll for Mobile Wallet',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Payroll Reconcile',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }
        ]
      }, {
        label: 'Reports',
        icon: 'fas fa-chart-line',
        items: [{
          label: 'Beneficiary Report',
          icon: 'fas fa-chart-bar',
          items: [
            {
              label: 'Summary',
              icon: 'fas fa-list',
              routerLink: 'dashboard',
            }, {
              label: 'Details',
              icon: 'fas fa-list',
              routerLink: 'dashboard',
            }
          ]
        }, {
          label: 'Payment Report',
          icon: 'fas fa-chart-bar',
          items: [
            {
              label: 'Summary',
              icon: 'fas fa-list',
              routerLink: 'dashboard',
            }, {
              label: 'Details',
              icon: 'fas fa-list',
              routerLink: 'dashboard',
            }, {
              label: 'Beneficiary Payment History',
              icon: 'fas fa-list',
              routerLink: 'dashboard',
            }
          ]
        }]
      }, {
        label: 'Monitoring & Evaluation',
        icon: 'fas fa-list-check',
        items: [
          {
            label: 'Cash Summary',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Beneficiary Enrolment Summary',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Key Monitoring Indicators',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Results Framework',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Reports',
            icon: 'fas fa-chart-pie',
            routerLink: 'dashboard',
          }
        ]
      }, {
        label: 'Technical Helpdesk',
        icon: 'fas fa-headset',
        items: [
          {
            label: 'Support Request',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Support Management',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Resolution',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Resolution Report',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }
        ]
      }, {
        label: 'GRM',
        icon: 'fas fa-headset',
        items: [
          {
            label: 'Non-GBV Grievances',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'GBV Grievances',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Non-GBV Dashboard',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'GBV Dashboard',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Grievances Status Report',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Excel Importing',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }
        ]
      }, {
        label: 'Invoice Management',
        icon: 'fas fa-file-invoice',
        items: [
          {
            label: 'Invoice Requests',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Gage Paid & Invoice',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }, {
            label: 'Payment Cyclewise Invoice Print',
            icon: 'fas fa-list',
            routerLink: 'dashboard',
          }
        ]
      }, {
        label: 'Deduplication/Adjudication',
        icon: 'fas fa-headset',
        items: []
      }, {
        label: 'User Management',
        icon: 'fas fa-users-cog',
        items: [
          {
            label: 'Register New User',
            icon: 'fas fa-user-plus',
            routerLink: 'dashboard',
          }, {
            label: 'Role List',
            icon: 'fas fa-user-secret',
            routerLink: 'dashboard',
          }, {
            label: 'User List',
            icon: 'fas fa-users',
            routerLink: 'dashboard',
          }
        ]
      }
    ];
  }
}
