//GUI TUTORIAL. TOOK 3 HRS.

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//Minecraft's current Context.


//The Gui Variables. i added them to save time. you may say WTF but that means you don't know Java and android. i recommend learning them.
var Runnable = java.lang.Runnable;
var widget = android.widget;
var LinearLayout = widget.LinearLayout;
var ScrollView = widget.ScrollView;
var WRAP_CONTENT = LinearLayout.LayoutParams.WRAP_CONTENT;
var Button = widget.Button;
var OnClickListener = android.view.View.OnClickListener;
var EditText = widget.EditText;
var TextView = widget.TextView;
var ProgressBar = widget.ProgressBar;
var PopupWindow = widget.PopupWindow;
var Dialog = android.app.Dialog;


//This tutorial will be based on commands ; To see the Gui You have to type the command. /Dialog or /Popup

//The Main Stuff are on the function Main_Layout :)"go there first." 

function procCmd(cmd)
{
switch(cmd)
 {
case"Dialog" :
GUI_DIALOG();
break;
 case "Popup":
 GUI_POPUP();
 break;
 
 }
}

//we make 2 global variables for the popup and the dialog so we can dismiss them.
var Dialog;
var Popup;
function GUI_DIALOG()
{
ctx.runOnUiThread(new Runnable(
{
	run : function()
	{
		try{
		 
	Dialog = new Dialog(ctx);
	Dialog.setContentView(Main_Layout());
	Dialog.setTitle("HIYZ");//you can set its Title.
	Dialog.show();//Show the GUI Dialog.
	}catch(e){
		clientMessage("Dial0g "+e)
	}
	}
}));
}

function GUI_POPUP()
{
	ctx.runOnUiThread(new Runnable(
	{
		run : function ()
		{
		try{	
		var Scroll_Popup=Main_Layout();
			Popup=new PopupWindow(ctx);
			Popup.setContentView(Main_Layout());
			Popup.setBackgroundDrawable(null);//you can use null for transpartent popup. but to make it colorful just do : new android.graphics.drawable.ColorDrawablen(android.graphics.Color.parseColor("Hex Color"));
			Popup.setWidth(WRAP_CONTENT);
			Popup.setHeight(WRAP_CONTENT);
			
			Popup.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER,0,0);//CENTER OR TOP OR BOTTOM OF LEFT OR RIGHT
			//The Last 0,0 are the coordinates of the gui on the screen according to the gravity. im bad a positioning :P
			}catch(e)
			{
				clientMessage("Popup"+ e);
			}
		}
	}));
}

function Main_Layout()
{
	var Layout;
	//in every function you add GUI in you have to run the Context on the ui thread. i recommend to make a new function for every GUI you add.
	/*
	to run on the ui thread ju do this :
	
	ctx.runOnUiThread(new Runnable(
	{
		run:function()
		{
			//here we define everything.
		}
	}
	));
	*/
	ctx.runOnUiThread(new Runnable(
	{
		run : function()
		{
			//try and catch so we get errors if they happen.
			 try{
			 	
			 	 Layout = new LinearLayout(ctx);//a layout is like a box that holds all the GUI elements
			 	Layout.setOrientation(1); //1 for vertical , 0 for horizontal.
			 	
			 	var Edit = new EditText(ctx);//Edit Text field.
			 	Edit.setHint("HI im a hint :3");//You can set the hint.
			 	/* 
			 	and You can get it's text by doing:
			 	Edit.getText();
			 	
			 	*/
			 	Layout.addView(Edit);//We add the EditText field to the Layout :)
			 	
			 	var Buton = new Button(ctx);//we define a button.
			 	Buton.setText("Hi Dude");//We set its Text.
			 	
			 	//Now we will add a click listener.. this will run what inside it when the button is clicked.
			 	Buton.setOnClickListener(new OnClickListener(
			 	{
			 		onClick : function()
			 		{
			 			clientMessage("You Clicked Meh...");
			 			 if(Dialog!=null)Dialog.dismiss();
			 			 Dialog=null;//dismiss makes the gui dissapear.
 if(Popup!=null)Popup.dismiss();Popup=null;
			 		}
			 	}));
			 	
			 	Layout.addView(Buton);//We add the button to the layout.
			 	
			 	var Txt = new TextView(ctx);//we define a text view.
			 	Txt.setText("Hi i am a text View :)");//we can set its text.
			 	Txt.setTextColor(android.graphics.Color.YELLOW);//you cab change it to whatever color. just in the parameter do android.graphics.Color.parseColor("a hex color. you can search for hex colors online. ex : #FFDC4D");
			 	Layout.addView(Txt);//You get it i guess :P
			 	var Progress = new ProgressBar(ctx , null ,android.R.attr.progressBarStyleHorizontal);//This will define a Horizontal Progress Bar... like :    ♥♥♥♥♡♡♡♡♡ (no homo its an example.)
			 	Progress.setMax(100);//the max value of the bar.
			 	Progress.setProgress(40);//You can set the current Progress.
			 Layout.addView(Progress);
			 	
			 }catch(e)
			  { 
			  clientMessage("ERROR: "+e);//we Send the error as a message for debugging.
			  }
		}
	}
	));
	 	return Layout; //we return the layout to use it in the GUI_DIALOG & GUI_POPUP functions.
			 	
			 	
			 	
}

