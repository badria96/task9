import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  animations: []
})

export class ClientComponent implements OnInit {
  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;
  showUserMenu: boolean = false;
  showMenu: boolean = false;
  displayClientListDialog: boolean = false;

  clients: any[] = [];

  displayAddClientDialog: boolean = false;

  countries: any[] = [ 
  { name: 'Oman', code: 'C1' },
  { name: 'India', code: 'C2' },
  { name: 'Qatar', code: 'C3' },
];

newClient: any;

  constructor(private dialogService: DialogService) { this.newClient = {};}

  ngOnInit() {
    this.items2 = [
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        label: 'User Profile',
        icon: 'pi pi-user',
      },
      {
        label: 'Log Out',
        icon: 'pi pi-sign-out',
      },
    ];
    this.items = [
      {
        label: 'Administration',
        icon: 'pi pi-fw pi-sitemap',
        items: [
          {
            label: 'Master Data',
            icon: 'pi pi-fw pi-database',
          },
          {
            label: 'Client',
            icon: 'pi pi-fw pi-users',
            command:() => (this.displayClientListDialog=true),
          },
          {
            label: 'User Regestration',
            icon: 'pi pi-fw pi-user-edit'
          },
          {
            label: 'User List',
            icon: 'pi pi-fw pi-book'
          },
          {
            label: 'Product',
            icon: 'pi pi-fw pi-cart-plus'
          },
          {
            label: 'Client Products',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Release Note',
            icon: 'pi pi-fw pi-file-edit'
          },
          {
            label: 'System Settings',
            icon: 'pi pi-fw pi-cog'
          }
        ]
      },
      {
        label: 'Client Products',
        icon: 'pi pi-fw pi-user-plus',
        items: []
      },
      {
        label: 'Service',
        icon: 'pi pi-fw pi-wrench',
        items: []
      },
      {
        label: 'QA',
        icon: 'pi pi-fw pi-verified',
        items: []
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-copy',
        items: []
      }
    ];


    this.clients = [
      { id: 1, code:'Client 1', name: 'badria' },
      { id: 2, code:'Client 2', name: 'amal' },
    ];

  }
    showAddClientDialog() {
      this.displayAddClientDialog = true;
    }

    addClient(clientData: any) {
      // Assuming 'clients' is an array where you store your clients
      this.clients.push(clientData);
      this.displayAddClientDialog = false; // Close the dialog
    }
    

    deleteClient(clientId: number) {
      // Assuming 'clients' is an array where you store your clients
      this.clients = this.clients.filter(client => client.id !== clientId);
    }    

    updateClient(clientData: any) {
      // Assuming 'clients' is an array where you store your clients
      const clientIndex = this.clients.findIndex(client => client.id === clientData.id);
      if (clientIndex !== -1) {
        this.clients[clientIndex] = clientData;
      }
    }    

    // Function to export data to Excel
    exportToExcel() {
      // Implement the logic to export data to Excel
    }

    saveNewClient() {
      // Check if the newClient data is valid (you can add your validation logic here)
      if (this.newClient && this.newClient.name) {
        // Generate a unique ID for the new client (you can use a different approach if needed)
        const newClientId = this.clients.length + 1;
    
        // Add the new client to the clients array
        this.clients.push({
          id: newClientId,
          code: `Client ${newClientId}`,
          name: this.newClient.name
        });
    
        // Clear the newClient data and close the dialog
        this.newClient = {};
        this.displayAddClientDialog = false;
      }
    }    
    
    cancelAddClient() {
      this.newClient = {};  
      this.displayAddClientDialog = false; 
    }
    

  }
