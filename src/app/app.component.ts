import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	displayedColumns: string[] = ['menuName', 'menuCategoryId', 'menuType', 'menuImageId', 'isSpice', 'isSweet', 'ingredient', 'deleted', 'masterMenuId'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

/*constructor(private menuService: MenuService){
	
}
*/
	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	
	
	/*delete(deleteValue: $event) {
		
		console.log("Edit value" + editValue);
	}*/
	
	/*getMenuList()
	{
	 this.menuService.getSubList("/subjects").then(invSubList => {
     console.log("------"+invSubList._body);
     this.SubjectList = invSubList.json();
	});

}*/
}

export interface PeriodicElement {
	menuName: string;
	menuCategoryId: string;
	menuType: string;
	menuImageId: string;
	isSpice: string;
	isSweet: string;
	ingredient: string;
	deleted: string;
	masterMenuId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ menuName: 'Aloo chaat', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https://s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Aloo Pakoda', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Aloo tikki', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Aloo Vada', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Bhel', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Chili Pakoda', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Dabeli', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Dahl batata puri', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Dhokala/Khaman', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'hello menu', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Kachori', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Masala vada', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Onion Pakoda', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Palak chat', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Palak Pakoda', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Paneer Butter Masala', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Pani puri', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Papadi chat', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Samosa', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Samosa chat', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Sev puri', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' },
	{ menuName: 'Veg Pakoda', menuCategoryId: 'd24fc89b333944c4bf40c73c8f3e21e4', menuType: 'aac056b384bf41eb8be7109ad2033f66', menuImageId: 'https:/s3.amazonaws.com/media-katoree4makers/D441176C-F926-445C-A632-5B3BD40482A2.jpg', isSpice: 'false', isSweet: 'false', ingredient: 'Flour crisps with diced potatoes, garnished with yougurt, tamarind and chat masala.', deleted: 'false',  masterMenuId: '64a516f428404ac1af8f3cfaccb11b05' }
];
