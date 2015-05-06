var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var LinearLayout= android.widget.LinearLayout;
var Dialog= android.app.Dialog;
var VERTICAL= android.widget.LinearLayout.VERTICAL;
var Button = android.widget.Button;
var OnClickListener=android.view.View.OnClickListener;
var dialog,layout,button;
function showGUI()
{
	layout = new LinearLayout(ctx);
	layout.setOrientation(VERTICAL);
	button = new Button(ctx);
	button.setText("Example Button");
	
	button.setOnClickListener(new OnClickListener(
	{
		onClick:function(p1)
		{
		dialog.dismiss();	clientMessage("Button Has Been Pressed");
		Level.setGameMode(0);	setVelY(getPlayerEnt(),50);
			clientMessage("I Believe i can Fly");
			clientMessage("You're Going To Die Soon!");
		}
	}
	));
	layout.addView(button);
	dialog= new Dialog(ctx);
	dialog.setContentView(layout);
 dialog.setTitle("Example GUI");
 
 dialog.show();
 
}


function useItem()
{
	showGUI();
}