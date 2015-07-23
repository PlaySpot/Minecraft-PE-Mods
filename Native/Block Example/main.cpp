/*
Your includes.
from your headers include Tile , TileItem and Material.

if you don't have headers already i recommend using @KSyMC 's headers. you can grap them on github.
*/

class MyNewBlock : public Tile{
	
	public :
	static const int ID = 200; //The Block's ID.

	public :
	MyNewBlock() : Tile (ID , "MyTextureName",Material::stone){
		setNameId("MyNewBlock"); //this will give our block a name. it will be tile.MyNewBlock.name.
		setCategory(2);
		init(); //very important to call this after you set all your block's info.
		new TileItem(ID - 256);
		
	}
	
};

 void (*Tile_initTiles)(); //the real pointer to the function.
 void Tile__initTiles(){//the hook
 	Tile_initTiles();//call the real function.
 	
 	Tile::tiles[MyNewBlock::ID] = new MyNewBlock();
 
 
 
 
 }
 
 
 /*at the JNIEXPORT function : */
 
 MSHookFunction((void*)&Tile::initTiles,(void*)&Tile__initTiles,(void**)&Tile_initTiles);