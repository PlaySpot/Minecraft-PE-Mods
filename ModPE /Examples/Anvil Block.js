//The Blocks IDs
var Anvil_Bottom = 241;
var Anvil_Bottom2 = 242;
var Anvil_Top2 = 243;
var Anvil_Top = 244;

//We Define The 4 Blocks 
Block.defineBlock(Anvil_Bottom, "Anvil",[["cauldron_inner", 0]],1,false);
Block.defineBlock(Anvil_Bottom2, "Anvil",[["cauldron_inner", 0]],1,false);
Block.defineBlock(Anvil_Top2, "Anvil",[["cauldron_inner", 0]],1,false);
Block.defineBlock(Anvil_Top, "Anvil",[["cauldron_inner", 0]],1,false);
Block.setRenderLayer(Anvil_Bottom, 0);
Block.setRenderLayer(Anvil_Bottom2, 0);
Block.setRenderLayer(Anvil_Top2, 0);
Block.setRenderLayer(Anvil_Top, 0);

//We set Thier shape
//This is tricky but you can get the hang of it :P
Block.setShape(Anvil_Bottom, 0.125, 0, 0.125, 0.875, 0.25, 0.875);
Block.setShape(Anvil_Bottom2, 1.25, 0.25, 0.1875, 1.75, 0.3125, 0.8125);
Block.setShape(Anvil_Top2, 2.375, 0.3125, 0.25, 2.625, 0.5625, 0.75);
Block.setShape(Anvil_Top, 3.1875, 0.5625, 0, 3.8125, 0.8125, 1);

function useItem(x,y,z,i,b)
{
	if(i==280)
//Stick
	{
		Level.setTile(x,y+1,z,Anvil_Bottom);
		Level.setTile(x-1,y+1,z,Anvil_Bottom2);
		Level.setTile(x-2,y+1,z,Anvil_Top2);
		Level.setTile(x-3,y+1,z,Anvil_Top);
	}
}

//Hope You Learned Something from this :D