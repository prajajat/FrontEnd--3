import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})
export type RootState = ReturnType<typeof store.getState>


// using System;
// public class Category{
// public	string name;
// 	public Category(string name){
// 		this.name=name;
// 	}
// }
// public enum MembershipType{
// 	student,
// 	regular,
// 	premium
// 	}
	
// public abstract class IBook{
    
// public	string title;
// public	string author; 
// public 	int ISBN;
// public	Category category;
// public	bool availability_status;
// }

// public abstract class Book :IBook
// {
// }
				
// public class PhysicalBook : Book
// { 
// 	public string location;
// }

// public class EBook : Book
// { 
// 	public string fileSize;
// }

// public class Member{
// 	string memberName;
// 	MembershipType type;
// }

// public class Program
// {
// 	public static void Main()
// 	{   
	    
// 	    Category c1=new Category("fiction");
// 	    Category c2=new Category("fiction-h");
// 	    Category c3=new Category("fiction-i");
	
// 		Book book_1=new PhysicalBook();
// 		book_1.title="3";
// 		book_1.author="a";
// 		book_1.ISBN=1;
// 		book_1.category=c1;
// 		book_1.availability_status=true;
// 		book_1.location="okoko";
		
		
		
		
// 	}
// }



// public enum VType{
// 	car,bike,truck
// }
// public interface IBooking{
// 	void booking();
// 	}
// public interface BookByType :IBooking{
// 	void booking(VType v);
// }
// public interface BookByModel :IBooking{
// 	void booking(string v);
// }
// public interface BookByBrand :IBooking{
// 	void booking(string v);
// }























