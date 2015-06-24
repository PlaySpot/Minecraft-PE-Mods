#include <jni.h>
#include <dlfcn.h>
#include <android/log.h>
#include <stdlib.h>

#include <Substrate.h>
#include<sstream>
#include<string.h>
#include"mcpe.h"
using namespace std;

Gui* currentGui;
MinecraftClient* Mc;
Level* CLevel;
static char** gSplashes;


string(*VersionNameR)();
string VersionNameH()
{
	return "§3Buffer 1.0";
}

void (*T$smsR)(Touch::StartMenuScreen*);
void T$smsH(Touch::StartMenuScreen* screen)
{
	
	screen->currentSplash=1;
}

void*(*MC$initR)(MinecraftClient*);
void* MC$initH(MinecraftClient*mc){
	MC$initR(mc);
	Mc=mc;
	currentGui=mc->getGui();
	
}
void(*GM$uioR)(GameMode*,Player&,ItemInstance*,const TilePos&,signed char,const Vec3&);
void GM$uioH(GameMode*g,Player&a,ItemInstance*b,const TilePos&c,signed char d,const Vec3&e)
{
	GM$uioR(g,a,b,c,d,e);
	 
	if(CLevel){
		Mob* plr = (Mob*)CLevel->getLocalPlayer();
		for(int i=1;i<23;i++){
			if(i==2||i==4||i==7||i==9||i==14||i==15||i==17||i==18||i==19||i==20)continue;
	plr->addEffect(MobEffectInstance(i,600,i));}
	}
	
};


void*(*L$oscR)(Level*,TileSource*);

void* L$oscH(Level*lvl,TileSource*ts){
	
	L$oscR(lvl,ts);
	
	CLevel=lvl;	
}





JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved) {
	
	void* lib = dlopen("libminecraftpe.so",RTLD_LAZY);
	dlerror();
	
	gSplashes= (char**)dlsym(lib,"gSplashes");
	gSplashes[1]="§3All Teh Buffz :D";
	
	MSHookFunction((void*)&Touch::StartMenuScreen::chooseRandomSplash/*dlsym(lib,"_ZN5Touch15StartMenuScreen18chooseRandomSplashEv")*/,(void*)&T$smsH,(void**)&T$smsR);
	
	
	void* VersionHandle=dlsym(lib,"_ZN6Common20getGameVersionStringEv");
	MSHookFunction(VersionHandle,(void*)&VersionNameH,(void**)&VersionNameR);
	
	MSHookFunction((void*)dlsym(lib,"_ZN15MinecraftClient4initEv"),(void*)&MC$initH,(void**)&MC$initR);
	
	MSHookFunction((void*)dlsym(lib,"_ZN8GameMode9useItemOnER6PlayerP12ItemInstanceRK7TilePosaRK4Vec3"),(void*)&GM$uioH,(void**)&GM$uioR);
	
	MSHookFunction((void*)dlsym(lib,"_ZN5Level15onSourceCreatedEP10TileSource"),(void*)&L$oscH,(void**)&L$oscR);
	
	return JNI_VERSION_1_2;
}
