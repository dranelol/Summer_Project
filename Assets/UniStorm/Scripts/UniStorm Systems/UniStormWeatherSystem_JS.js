//UniStorm Weather System JavaScript Version 1.8.3 @ Copyright
//Black Horizon Studios

import System.Collections.Generic;

//Added 1.8.2
var calendarType : int = 0;
var numberOfDaysInMonth : int = 31;
var numberOfMonthsInYear : int = 12;
	
//Added 1.8.1
var partlyCloudyClouds1 : GameObject;
var partlyCloudyClouds2 : GameObject;

var partlyCloudyFader : float;

var cloudType : int = 1;
var UseRainSplashes : boolean = true;
var UseRainMist : boolean = true;
var rain : ParticleSystem;
var rainSplashes : ParticleSystem;
var snow : ParticleSystem; 
var snowMistFog : ParticleSystem;
var rainMist : ParticleSystem; 
var sunOffSetX : float;
var sunOffSetY : float;
var sunOffSet : Vector2 = new Vector2( 0.0f, 0.0f );

var dynamicPartlyCloudyFloat1 : float;
var dynamicPartlyCloudyFloat2 : float;
	
var dynamicPartlyCloudy1 : GameObject;
var dynamicPartlyCloudy2 : GameObject;
	
var MorningSkyboxTintContrast : Color;
var MiddaySkyboxTintContrast : Color;
var DuskSkyboxTintContrast : Color;
var NightSkyboxTintContrast : Color;
	
var springTemp : int = 0;
var summerTemp : int = 0;
var fallTemp : int = 0;
var winterTemp : int = 0;
	
var weatherShuffled : boolean = false;
	
var minHeavyRainMistIntensity : float = 0;
var maxHeavyRainMistIntensity : int = 20;
	
var moonSize : int = 4;
var moonRotationY : float = 4;
var customMoonSize : boolean = false;
var customMoonRotation : boolean = false;
var moonRotation : Quaternion = Quaternion.identity;
	
var cloudColorMorning : Color; 
var cloudColorDay : Color; 
var cloudColorEvening : Color; 
var cloudColorNight : Color;
	
var stormyFogColorMorning : Color; 
var stormyFogColorDay : Color; 
var stormyFogColorEvening : Color; 
var stormyFogColorNight : Color; 
	
var originalFogColorMorning : Color; 
var originalFogColorDay : Color; 
var originalFogColorEvening : Color; 
var originalFogColorNight : Color;
	
var fader : float = 0;
var fader2 : float = 0;
	
var weatherHappened : boolean = false;
	
var moonFade : float = 0;
var moonFade2 : float = 0;
	
var moonColorFade : Color;
	
var temperatureType : int = 1;
var temperature_Celsius : int = 1;
	
var stormControl : boolean = true;
	
var forceWeatherChange : int = 0;
			
//Added 1.8
var randomizedRainIntensity : int;
var currentGeneratedIntensity : int;
var lastWeatherType : int;
var randomizedPrecipitation : boolean = false;
var moonShadowQuality : int = 2;

var useSunFlare : boolean = false;
var lightFlareObject : GameObject;
var useRainStreaks : boolean = true;
var sunFlareColor : Color;

var timeToWaitMin : int;
var timeToWaitMax : int;
private var timeToWaitCurrent : int = 3;

var TODSoundsTimer : float;
var playedSound : boolean = false;
var getDelay : boolean = false;
var amountOfSounds : int;
var useMorningSounds : boolean = false;
var useDaySounds : boolean = false;
var useEveningSounds : boolean = false;
var useNightSounds : boolean = false;

var tempMat : Material;
var lightningColor : Color;

var morningSize : int;
var daySize : int;
var eveningSize : int;
var nightSize : int;
var ambientSoundsMorning : List.<AudioClip>;
var ambientSoundsDay : List.<AudioClip>;
var ambientSoundsEvening : List.<AudioClip>;
var ambientSoundsNight : List.<AudioClip>;
var foldOutList : List.<boolean >;

var shadowsDuringDay : boolean;
var dayShadowIntensity : float;
var dayShadowType : int = 1;

var shadowsDuringNight : boolean;
var nightShadowIntensity : float;
var nightShadowType : int = 1;

var shadowsLightning : boolean;
var lightningShadowIntensity : float;
var lightningShadowType : int = 1;

var fogMode : int = 1;

var version : String;

//Clouds
var materialIndex : int = 0;
	
var uvAnimationRateA : Vector2 = new Vector2(1.0f, 0.0f);
var CloudA : String = "_MainTex1";
	
var uvAnimationRateB : Vector2 = new Vector2(1.0f, 0.0f);
var CloudB : String = "_MainTex2";
   
var uvAnimationRateC : Vector2 = new Vector2(1.0f, 0.0f);
var CloudC : String = "_MainTex3";

var uvAnimationRateHeavyA : Vector2 = new Vector2(1.0f, 0.0f);
var uvAnimationRateHeavyB : Vector2 = new Vector2(1.0f, 0.0f);
var uvAnimationRateHeavyC : Vector2 = new Vector2(1.0f, 0.0f);
   
var uvOffsetA : Vector2  = Vector2.zero;
var uvOffsetB : Vector2  = Vector2.zero;
var uvOffsetC : Vector2  = Vector2.zero;

var uvOffsetHeavyA : Vector2  = Vector2.zero;
var uvOffsetHeavyB : Vector2  = Vector2.zero;
var uvOffsetHeavyC : Vector2  = Vector2.zero;
	
var scale : boolean = false;
	
var scaleX : float;
var scaleY : float;

var cloudDensity : int;

var customRainSound : AudioClip;
var customRainWindSound : AudioClip;
var customSnowWindSound : AudioClip;

var useCustomPrecipitationSounds : boolean = false;

var useUnityFog : boolean;

//

//Time keeping variables
var minuteCounter = 0;
var hourCounter : int = 0;
var dayCounter = 0;
var monthCounter = 0;
var yearCounter = 0;
var temperature = 0;
var dayLength : float;
var cloudSpeed : float;
var heavyCloudSpeed : float;
var starSpeed : float;
var starRotationSpeed : float;
var timeStopped : boolean = false;
var staticWeather : boolean = false;
var realWordSunPosistion : boolean = true;
//var instantWeather : boolean = false;
var timeScrollBar : boolean = false;
//var horizonToggle : boolean = true;
var dynamicSnowEnabled : boolean = true;
var weatherCommandPromptUseable : boolean = false;
var timeScrollBarUseable : boolean = false;
var startTime : float;
var moonPhaseChangeTime : float;
var weatherForecaster : int = 0;
var weatherForecasterStart : int = 0;
private var stringToEdit : String = "0";

private var SnowAmount : float;

//Sun intensity control
var sunIntensity : float;
var maxSunIntensity : float; 
var moonLightIntensity : float;

//Sun angle control
var sunAngle : float;

//Ambient light colors
var MorningAmbientLight : Color;
var MiddayAmbientLight : Color;
var DuskAmbientLight : Color;
var NightAmbientLight : Color;

//Background colors
private var backgroundNightColor : Color;
private var backgroundDuskColor : Color;
private var backgroundMorningColor : Color;
private var backgroundMiddayColor : Color;

//Sun colors
var SunMorning : Color;
var SunDay : Color;
var SunDusk : Color;
var SunNight : Color;

//Storm color variables
var stormyFogColorDay_GF : Color;
var stormyFogColorDuskDawn_GF : Color;
var stormyFogColorNight_GF : Color;

//Horizon colors
//var horizonMorning : Color;
//var horizonDay : Color;
//var horizonDusk : Color;
//var horizonNight : Color;

//Fog colors
var fogMorningColor : Color;
var fogDayColor : Color;
var fogDuskColor : Color;
var fogNightColor : Color;

var fogDensity : float;

//Skyboxes
var SkyBoxMaterial1 : Material;
var SkyBoxMaterial2 : Material;

var MorningSkyboxTint : Color;
var MiddaySkyboxTint : Color;
var DuskSkyboxTint : Color;
var NightSkyboxTint : Color;
var NightFullSkyboxTint : Color;

var MorningGradientLight : Color;
var DayGradientLight : Color;
var DuskGradientLight : Color;
var NightGradientLight : Color;

//Gradient Light Colors
var MorningGradientContrastLight : Color;
var DayGradientContrastLight : Color;
var DuskGradientContrastLight : Color;
var NightGradientContrastLight : Color;

//Atmospheric colors
var MorningAtmosphericLight : Color;
var MiddayAtmosphericLight : Color;
var DuskAtmosphericLight : Color;

//Star System game objects
var starSphere : GameObject;
var gradientSphere: GameObject;
var starBrightness : Color;
var moonObject : GameObject;
//var horizonObject : GameObject;
var moonColor : Color;
//var moonPhases : Material[];

var moonPhaseCalculator : int;
var moonFadeOutTime : float;
var moonFadeInTime : float;	
var moonFadeColor : Color;
var moonPhase1 : Material;
var moonPhase2 : Material;
var moonPhase3 : Material;
var moonPhase4 : Material;
var moonPhase5 : Material;
var moonPhase6 : Material;
var moonPhase7 : Material;
var moonPhase8 : Material;

//private var changeInterval = 1;

//Clouds game objects
var lightClouds1 : GameObject;
var lightClouds1a : GameObject;
var lightClouds2 : GameObject;
var lightClouds3 : GameObject;
var lightClouds4 : GameObject;
var lightClouds5 : GameObject;
var highClouds1 : GameObject;
var highClouds2 : GameObject;
var mostlyCloudyClouds : GameObject;
var heavyClouds : GameObject;
var heavyCloudsLayer1 : GameObject;
var heavyCloudsLayerLight : GameObject;

//Max rain particles
var maxLightRainIntensity : float = 400;
var maxLightRainMistCloudsIntensity : float = 4;
var maxStormRainIntensity : float = 1000;
var maxStormMistCloudsIntensity : float = 15;

var maxLightSnowIntensity : float = 400;
var maxLightSnowDustIntensity : float = 4;
var maxSnowStormIntensity : float = 1000;
var maxHeavySnowDustIntensity : float = 15;

//Weather game objects
//var rain : GameObject;
//var snow : GameObject;
var butterflies : GameObject;
var mistFog : GameObject;
//var snowMistFog : GameObject;
var windyLeaves : ParticleSystem;
var windZone : GameObject;

var snowObject : GameObject;

var sun : Light;
var moon : Light;

//Storm sound effects
var rainSound : GameObject;
var windSound : GameObject;
var windSnowSound : GameObject;
//var nightSound : GameObject;

var cameraThing : GameObject;

var startTimeNumber : int;

private var random : float;
private var random2 : float;
//private var weatherOdds = 0;

//Our fade number values
private var sunRotate = 0;
private var fadeHorizonController : float = 0;
private var fadeHorizon : float = 0;
private var stormClouds : float = 0;
private var fade : float = 0;
private var fade2 : float = 0;
private var butterfliesFade : float = 0;
private var windyLeavesFade : float = 0;
private var fadeStormClouds : float = 0;
private var fadeStars : float = 0;
private var time : float = 0;
private var sunShaftFade : float = 0;
private var fadeCloudsNight : float = 0;
private var windControl : float = 0;
private var windControlUp : float = 0;
private var clearClouds : float = 0;
private var windSnowSoundHandler : float = 0;
private var dynamicSnowFade : float = 0;
private var overrideFog : boolean = false;

//1.6 weather helper variables
private var stormCounter : float = 0;
private var	forceStorm = 0;
private var changeWeather = 0;

//1.6 weather commands
private var foggy : String = "01";
private var lightRain_lightSnow : String = "02";
private var rainStorm_snowStorm : String = "03";
private var partlyCloudy1 : String = "04";
private var partlyCloudy2 : String = "05";
private var partlyCloudy3 : String = "06";
private var clear1 : String = "07";
private var clear2 : String = "08";
private var cloudy : String = "09";
private var mostlyCloudy : String = "001";
private var heavyRain : String = "002";
private var fallLeaves : String = "003";
private var butterfliesSummer : String = "004";
private var commandPromptActive : boolean = false;

//Rain particle density controls
private var minRainIntensity : float;
private var minFogIntensity : float;

//private var randomizedRainIntensity : float;

//Snow particle density controls
private var minSnowIntensity : float;
private var minSnowFogIntensity : float;

//Priavte vars
private var calculate2 : float;
//private var moonPhaseCalculator = 0;
//private var moonPhaseCalculator2 = 0;
private var lockAxisZ : float = 0;
private var lockAxisY : float = 0;
var Hour : float;
private var minuteCounterCalculator = 0.0;
private var yearCounterCalculator = 0.0;
private var cloudSpeedY : float;
private var cloudSpeedHighY : float;
private var sunShaftScript : SunShafts;
private var fogScript : GlobalFog;
//private var rainOnCamera : ImageRefractionEffect;
public var globalFogColor;
private var timeOfDay: float;
private var startTimeTimer : float = 5;

var weatherOdds : int = 0;
var weatherChanceSpring : int = 0;
var isSpring : boolean;
var weatherChanceSummer : int = 0;
var isSummer : boolean;
var weatherChanceFall : int = 0;
var isFall : boolean;
var weatherChanceWinter : int = 0;
var isWinter : boolean;
var weatherUpdate : int = 0;
var weatherUpdateActive : boolean;

//Temperature Variables
var temperatureFluctuation : boolean;
var temperatureGenerator : boolean;
var minSpringTemp : int;
var maxSpringTemp : int;
var minSummerTemp : int;
var maxSummerTemp : int;
var minFallTemp : int;
var maxFallTemp : int;
var minWinterTemp : int;
var maxWinterTemp : int;
var startingSpringTemp : int;
var startingSummerTemp : int;
var startingFallTemp : int;
var startingWinterTemp : int;
var loadSpringTemp : boolean;
var loadSummerTemp : boolean;
var loadFallTemp : boolean;
var loadWinterTemp : boolean;

var morningTime_eveningTime : boolean;
var dayTime : boolean;
var nightTime : boolean;

//var waterObject : GameObject;

var waterBaseNightColor : Color;
var waterBaseMorningColor : Color;
var waterBaseDuskColor : Color;
var waterBaseDayColor : Color;

var waterLightNightColor : Color;
var waterLightMorningColor : Color;
var waterLightDuskColor : Color;
var waterLightDayColor : Color;


//NEW as of UniStorm 1,7
//Lightning Variables
var lightSource : Light;

var lightningFlashLength : float;
var lightningMinChance : int = 5;
var lightningMaxChance : int = 10;

var minIntensity : float;
var maxIntensity : float;
var lightningIntensity : float;

var lightningOdds : float;

var timer : float;
var onTimer : float;

var lightingGenerated : boolean;
var fadeLightning : boolean;

var lightningBolt1 : GameObject;

//var lightningSound : AudioClip[];

var thunderSound1 : AudioClip;
var thunderSound2 : AudioClip;
var thunderSound3 : AudioClip;
var thunderSound4 : AudioClip;
var thunderSound5 : AudioClip;

var lightningNumber : int;


var lightningSpawn : Transform;

var intArray:int[]=new int[0];


var stormyFogDistance : int;
var stormyFogDistanceStart : int;

var fogStartDistance : int;
var fogEndDistance : int;

var useUnity5Sun : boolean = true;
var sunSize : float = 0.02f;
var skyTintColor : Color;
var groundColor : Color;
var atmosphereThickness : float;
var exposure : float;

function Awake () {

if (useCustomPrecipitationSounds)
	{
		rainSound.GetComponent.<AudioSource>().clip = customRainSound;
		rainSound.GetComponent.<AudioSource>().enabled = false;
		
		windSound.GetComponent.<AudioSource>().clip = customRainWindSound;
		windSound.GetComponent.<AudioSource>().enabled = false;
		
		windSnowSound.GetComponent.<AudioSource>().clip = customSnowWindSound;
		windSnowSound.GetComponent.<AudioSource>().enabled = false;
	}	

}

function Start () {
	
	//Added 1.8.3
	RenderSettings.skybox = SkyBoxMaterial1;
	useSunFlare = true;
	
	if (dayCounter <= 0)
	{
		dayCounter = 1;
	}

	SkyBoxMaterial1.SetFloat("_SunSize", sunSize);
	SkyBoxMaterial1.SetColor("_SkyTint", skyTintColor);
	SkyBoxMaterial1.SetColor("_GroundColor", groundColor);
	
	SkyBoxMaterial1.SetFloat("_AtmosphereThickness", atmosphereThickness);
	SkyBoxMaterial1.SetFloat("_Exposure", exposure);

	if (cloudType == 1 && weatherForecaster == 4 || cloudType == 1 && weatherForecaster == 5 || cloudType == 1 && weatherForecaster == 6)
	{
		partlyCloudyFader = 1;
	}
	
	//Check for errors, if an error is found report the proper error report according to the list.
	LogErrorCheck();
	
	weatherUpdate = 0;
	
	fader2 = 1;
	
	//Added 1.8.1
	if (UseRainSplashes)
	{
		rainSplashes.gameObject.SetActive(true);
	}
		
	if (!UseRainSplashes)
	{
		rainSplashes.gameObject.SetActive(false);
	}
		
	//Added 1.8.1
	originalFogColorMorning = fogMorningColor;
	originalFogColorDay = fogDayColor;
	originalFogColorEvening = fogDuskColor;
	originalFogColorNight = fogNightColor;
		
	//Added 1.8.1
	if (customMoonSize)
	{
		moonObject.transform.localScale = new Vector3(moonSize, moonSize, moonSize);
	}
		
	if (customMoonRotation)
	{
		//moonObject.transform.eulerAngles = new Vector3(moonObject.transform.eulerAngles.x, moonRotationY, moonObject.transform.eulerAngles.x);
		moonObject.transform.eulerAngles = new Vector3(0, moonRotationY, 180);
	}
	
	//Added 1.7.5
	if (useUnityFog)
	{
		RenderSettings.fog = true;
	}
	
	if (fogMode == 1)
	{
		RenderSettings.fogMode = FogMode.Linear;
	}
	
	if (fogMode == 2)
	{
		RenderSettings.fogMode = FogMode.Exponential;
	}
	
	if (fogMode == 3)
	{
		RenderSettings.fogMode = FogMode.ExponentialSquared;
	}
	
	sunIntensity = maxSunIntensity;
	
	if (useCustomPrecipitationSounds)
	{
		rainSound.GetComponent.<AudioSource>().enabled = true;
		windSound.GetComponent.<AudioSource>().enabled = true;
		windSnowSound.GetComponent.<AudioSource>().enabled = true;
	}	
	
	lightSource.color = lightningColor;

	//Added 1.7.5
	version = Application.unityVersion;
	
	//Updated 1.8.1 
	//This fix updates scripts to Unity 4.0+ so you no longer get obsolete messages
		
		//If user chooses to use standard clouds
		if (cloudType == 2)
		{
			//Fixed obsolete error
			heavyCloudsLayerLight.SetActive(false);
			heavyCloudsLayer1.SetActive(true);
			lightClouds1.SetActive(false);
			lightClouds1a.SetActive(false);
			lightClouds2.SetActive(true);
			lightClouds3.SetActive(true);
			lightClouds4.SetActive(true);
			lightClouds5.SetActive(true);
			highClouds1.SetActive(true);
			highClouds2.SetActive(true);
			mostlyCloudyClouds.SetActive(true);
			//horizonObject.SetActive(true);
		}
		
		//If user chooses to use dynamic clouds
		if (cloudType == 1)
		{
			//Updated 1.8.1
			lightClouds1.SetActive(true);
			heavyCloudsLayerLight.SetActive(true);
			heavyCloudsLayer1.SetActive(false);
			lightClouds2.SetActive(false);
			lightClouds3.SetActive(false);
			lightClouds4.SetActive(false);
			lightClouds5.SetActive(false);
			highClouds1.SetActive(false);
			highClouds2.SetActive(false);
			mostlyCloudyClouds.SetActive(false);
			//horizonObject.SetActive(false);
			
			partlyCloudyClouds1.SetActive(true);
			
			if (cloudDensity == 1)
			{
				//Warning Obsolete Message Update
				lightClouds1a.SetActive(false);
				partlyCloudyClouds2.SetActive(false);
			}
			
			if (cloudDensity == 2)
			{
				//Warning Obsolete Message Update
				lightClouds1a.SetActive(true);
				partlyCloudyClouds2.SetActive(true);
			}
		}
		
		//Set dynamic cloud values
		uvAnimationRateA = new Vector2(0.001f, 0.0f);
		uvAnimationRateB = new Vector2(0.001f, 0.001f);
		//uvAnimationRateB = new Vector2(0.001f, -0.0035f);
		uvAnimationRateC = new Vector2(0.0001f, 0.0f);
		
		uvAnimationRateHeavyA = new Vector2(0.005f, 0.001f);
		uvAnimationRateHeavyB = new Vector2(0.004f, 0.0035f);
		uvAnimationRateHeavyC = new Vector2(0.0001f, 0.0f);
	
	//Added 1.7.5
	//Fixed obsolete error
	if (useSunFlare)
	{
		lightFlareObject = GameObject.Find("Sun Glare");
			
		lightFlareObject.GetComponent.<Light>().color = sunFlareColor;
			
		//Added 1.8.1
		//Fixed obsolete messages
			
		//Warning Obsolete Message Update
		GameObject.Find("SunGlow").SetActive(false);
		lightFlareObject.SetActive(false);
			
	}
		
	if (!useSunFlare)
	{		
		//lightFlareObject = GameObject.Find("Sun Glare");
		//GameObject.Find("Sun Glare").SetActive(false);
	}
	
	if (useRainStreaks)
	{
		mistFog.SetActive(true);
	}
		
	if (!useRainStreaks)
	{
		mistFog.SetActive(false);
	}
		
	if (startTimeNumber == 1)
	{
		startTime = .28;
		moon.intensity = 0;
		moonPhaseChangeTime = 0;
	}
		
	if (startTimeNumber == 2)
	{
		fadeStars = 0;
		moon.intensity = 0;
		startTime = .416f;	
		moonPhaseChangeTime = 0;
	}
		
	if (startTimeNumber == 3)
	{
		startTime = .72;
		moon.intensity = 0;
		moonPhaseChangeTime = 0;
	}
		
	if (startTimeNumber == 4)
	{
		startTime = .0;
		moonPhaseChangeTime = .4165f;
	}
	
	
	if (RenderSettings.fogMode == FogMode.Linear)
	{
		RenderSettings.fogStartDistance = fogStartDistance;
		RenderSettings.fogEndDistance = fogEndDistance;
	}
	
}

function Update () {

	//Added 1.7.5	
		if (weatherForecaster == 2 && useRainStreaks)
		{
			if (minFogIntensity <= 0)
			{
				mistFog.gameObject.SetActive(false);
			}
		}

		if (weatherForecaster == 3 && useRainStreaks || weatherForecaster == 12 && useRainStreaks)
		{
			if (minFogIntensity >= 1)
			{
				mistFog.gameObject.SetActive(true);
			}
		}
		
		//Added 1.8.1
		if (weatherForecaster == 2 && UseRainMist)
		{
			if (minHeavyRainMistIntensity <= 0)
			{
				rainMist.gameObject.SetActive(false);
			}
		}

		if (weatherForecaster == 3 && UseRainMist || weatherForecaster == 12 && UseRainMist)
		{
			if (minHeavyRainMistIntensity >= 1)
			{
				rainMist.gameObject.SetActive(true);
			}
		}
	
	DynamicTimeOfDaySounds ();
	


	if (startTimeNumber == 1 || startTimeNumber == 2 || startTimeNumber == 3)
		{
			startTimeTimer -= Time.deltaTime;
			starSphere.GetComponent.<Renderer>().enabled = false;
			if (startTimeTimer <= 0)
			{
				startTimeNumber = 0;	
				starSphere.GetComponent.<Renderer>().enabled = true;
			}
		}
		
	if (minuteCounter <= 5)
		{
			weatherShuffled = false;
		}
	
		//Rewrote weather generator
		//Weather now generates properly according to season
		//Weather will also not longer get stuck generating endlessly when using the slider
		//This allows for reliable consistant weather generation
		
		if (minuteCounter > 58 && !weatherShuffled)
		{
			weatherShuffled = true;
			
			if (weatherUpdate == 1 && isSpring == true)
			{	
				
				//80% chance for percipitation			
				if (weatherChanceSpring == 80)
				{
					weatherOdds = Random.Range (80,100);
				}
				
				//60% chance for percipitation			
				if (weatherChanceSpring == 60)
				{
					weatherOdds = Random.Range (60,100);
				}
				
				//40% chance for percipitation			
				if (weatherChanceSpring == 40)
				{
					weatherOdds = Random.Range (40,100);
				}	
				
				//20% chance for percipitation			
				if (weatherChanceSpring == 20)
				{
					weatherOdds = Random.Range (20,100);
				}
			}
			
			//Summer Weather Odds
			if (weatherUpdate == 1 && isSummer == true)
			{	
				
				//80% chance for percipitation			
				if (weatherChanceSummer == 80)
				{
					weatherOdds = Random.Range (80,100);
				}
				
				//60% chance for percipitation			
				if (weatherChanceSummer == 60)
				{
					weatherOdds = Random.Range (60,100);
				}
				
				//40% chance for percipitation			
				if (weatherChanceSummer == 40)
				{
					weatherOdds = Random.Range (40,100);
				}	
				
				//20% chance for percipitation			
				if (weatherChanceSummer == 20)
				{
					weatherOdds = Random.Range (20,100);
				}
			}
			
			//Fall Weather Odds
			if (weatherUpdate == 1 && isFall == true)
			{	
				
				//80% chance for percipitation			
				if (weatherChanceFall == 80)
				{
					weatherOdds = Random.Range (80,100);
				}
				
				//60% chance for percipitation			
				if (weatherChanceFall == 60)
				{
					weatherOdds = Random.Range (60,100);
				}
				
				//40% chance for percipitation			
				if (weatherChanceFall == 40)
				{
					weatherOdds = Random.Range (40,100);
				}	
				
				//20% chance for percipitation			
				if (weatherChanceFall == 20)
				{
					weatherOdds = Random.Range (20,100);
				}
			}
			
			//Winter Weather Odds
			if (weatherUpdate == 1 && isWinter == true)
			{	
				
				//80% chance for percipitation			
				if (weatherChanceWinter == 80)
				{
					weatherOdds = Random.Range (80,100);
				}
				
				//60% chance for percipitation			
				if (weatherChanceWinter == 60)
				{
					weatherOdds = Random.Range (60,100);
				}
				
				//40% chance for percipitation			
				if (weatherChanceWinter == 40)
				{
					weatherOdds = Random.Range (40,100);
				}	
				
				//20% chance for percipitation			
				if (weatherChanceWinter == 20)
				{
					weatherOdds = Random.Range (20,100);
				}
			}
		}
	/*
	//Choose whether the horizon is enabled or disabled
	if (horizonToggle == false)
		{
			horizonObject.renderer.enabled = false;
		}
		
	if (horizonToggle == true)
		{
			horizonObject.renderer.enabled = true;
		}
	*/	
	
	hourCounter = Hour;
	stormCounter += Time.deltaTime * .5;
	minuteCounterCalculator = Hour * 60;
	minuteCounter = minuteCounterCalculator;   
	sunRotate = minuteCounter;
	cloudScrollSpeedCalculator = cloudSpeed * .001;
	heavCloudScrollSpeedCalculator = heavyCloudSpeed * .001;
	starSpeedCalculator = starSpeed * 0.001;
	
	//Calculates the scroll speed of the clouds based on the daylength speed 
	cloudSpeedY = .003;
	cloudSpeedHighY = .0015;
	starSpeedY5 = .004;
	
	var offsetY5a = Time.time * cloudScrollSpeedCalculator;
	var offsetY5b = Time.time * heavCloudScrollSpeedCalculator;
	var offsetY5c = Time.time * starSpeedCalculator;
	
	var starRotationSpeedCalc = Time.time * starRotationSpeed * 0.0005;
	
	var offsetY5 = Time.time * cloudSpeedY;
	var offsetStormY5 = Time.time * starSpeedY5;
	var offsetYHigh5 = Time.time * cloudSpeedHighY;
	var offsetX5 = Time.time * starSpeedY5; 
	
	//1.7.5
	if (cloudType == 2)
	{ 
		heavyCloudsLayer1.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (offsetY5b,0); 
		lightClouds2.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (offsetY5a,offsetY5a);		
		lightClouds3.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (0,offsetY5a);
		lightClouds4.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (offsetY5a,offsetY5a);
		lightClouds5.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (0,offsetY5a);
		highClouds1.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (0,offsetY5a);
		highClouds2.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (0,offsetY5a);
		mostlyCloudyClouds.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (0,offsetY5a);
		//heavyCloudsLayerLight.renderer.sharedMaterial.mainTextureOffset = Vector2 (0,offsetY5b);
	} 
	
	heavyClouds.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (offsetY5b,offsetY5b);
	
	starSphere.GetComponent.<Renderer>().sharedMaterial.mainTextureOffset = Vector2 (offsetY5c,0 + .02);

	starSphere.transform.rotation = Quaternion.AngleAxis(starRotationSpeedCalc * 360 - 90, Vector3.up);
	starSphere.transform.eulerAngles.z = 0;
	starSphere.transform.eulerAngles.x = 270;
	//
	
	//Added 1.7.5, Controls shadows for both day and night light sources
	if (shadowsDuringDay)
	{
		if (dayShadowType == 1)
		{
			sun.GetComponent.<Light>().shadows = LightShadows.Hard;
		}
		
		if (dayShadowType == 2)
		{
			sun.GetComponent.<Light>().shadows = LightShadows.Soft;
		}
		
		sun.GetComponent.<Light>().shadowStrength = dayShadowIntensity;
	}
	
	if (!shadowsDuringDay)
	{
		sun.GetComponent.<Light>().shadows = LightShadows.None;
	}
	
	if (shadowsDuringNight)
	{
		if (nightShadowType == 1)
		{
			moon.GetComponent.<Light>().shadows = LightShadows.Hard;
		}
		
		if (nightShadowType == 2)
		{
			moon.GetComponent.<Light>().shadows = LightShadows.Soft;
		}
		
		moon.GetComponent.<Light>().shadowStrength = nightShadowIntensity;
	}
	
	if (!shadowsDuringNight)
	{
		moon.GetComponent.<Light>().shadows = LightShadows.None;
	}
	
	if (shadowsLightning)
	{
		if (lightningShadowType == 1)
		{
			lightSource.GetComponent.<Light>().shadows = LightShadows.Hard;
		}
		
		if (lightningShadowType == 2)
		{
			lightSource.GetComponent.<Light>().shadows = LightShadows.Soft;
		}
		
		lightSource.GetComponent.<Light>().shadowStrength = lightningShadowIntensity;
	}
	
	if (!shadowsLightning)
	{
		lightSource.GetComponent.<Light>().shadows = LightShadows.None;
	}
	
	//
	
						


		
		
		//Calculates our seasons
		if (monthCounter >= 2 && monthCounter <= 4)
		{
			//print("It's Spring");
			//weatherOdds = dayLength * 43; 
			isSpring = true;
			isSummer = false;
			isFall = false;
			isWinter = false;
			WeatherForecaster ();
			
		}
		
		//Calculates our seasons
		if (monthCounter >= 5 && monthCounter <= 7)
		{
			//print("It's Summer");
			//weatherOdds = dayLength * 101; 
			isSummer = true;
			isSpring = false;
			isFall = false;
			isWinter = false;
			WeatherForecaster ();
		}
		
		//Calculates our seasons
		if (monthCounter >= 8 && monthCounter <= 10)
		{
			//print("It's Fall");
			//weatherOdds = dayLength * 46;
			isSummer = false;
			isSpring = false;
			isFall = true;
			isWinter = false; 
			WeatherForecaster ();
		}
		
		//Calculates our seasons
		if (monthCounter == 11 || monthCounter == 12 || monthCounter == 1)
		{
			//print("It's Winter");
			//weatherOdds = dayLength * 33; 
			isSummer = false;
			isSpring = false;
			isFall = false;
			isWinter = true;
			WeatherForecaster ();
		}
		
	//Controls wether the weather command prompt is enabled or disabled	
    if (weatherCommandPromptUseable == true)
	{
		if(Input.GetKeyDown(KeyCode.F12))
		{
			commandPromptActive = !commandPromptActive;
   	    }
  	} 
  	
  	if (timeScrollBarUseable == true)
	{
		if(Input.GetKeyDown(KeyCode.F12))
		{
			timeScrollBar = !timeScrollBar;
   	    }
  	} 
    
    if (weatherCommandPromptUseable == false)
	{ 
		commandPromptActive = false;
	}
		
	
		//Calculates our hours into days
		if(Hour >= 24)
		{
			startTime = 0;
			calculate2 = 0;
			Hour = 0;
			dayCounter += 1;
			forceStorm += 1;
			moonPhaseCalculator += 1;
		
		
			//Adds amount of days that have percipitation to make sure it doesn't happen too long
			if (weatherForecaster == 3 || weatherForecaster == 2 || weatherForecaster == 12) 
			{
				changeWeather += 1; 
			}
		}		

	//Updated 1.8.1
	//Temperatures will now properly generate with each season
		if (monthCounter >= 2 && monthCounter <= 4)
		{
			summerTemp = 0;
			winterTemp = 0;
			fallTemp = 0;
			
			if (springTemp == 0)
			{
				springTemp = 1;
				//Debug.Log("Spring Check 1");
			}
		}
		
		if (monthCounter >= 5 && monthCounter <= 7)
		{
			winterTemp = 0;
			fallTemp = 0;
			springTemp = 0;
			
			if (summerTemp == 0)
			{
				summerTemp = 1;
				//Debug.Log("Summer Check 1");
			}
		}
		
		if (monthCounter >= 8 && monthCounter <= 10)
		{
			summerTemp = 0;
			winterTemp = 0;
			springTemp = 0;
			
			if (fallTemp == 0)
			{
				fallTemp = 1;
				//Debug.Log("Fall Check 1");
			}
		}
		
		if (monthCounter == 11 || monthCounter == 12 || monthCounter == 1)
		{
			summerTemp = 0;
			fallTemp = 0;
			springTemp = 0;
			
			if (winterTemp == 0)
			{
				winterTemp = 1;
				//Debug.Log("Winter Check 1");
			}
		}
		
		if (monthCounter >= 2 && monthCounter <= 4)
		{
			if (springTemp == 1)
			{
				temperature = startingSpringTemp;
				springTemp = 2;
				//Debug.Log("Spring Check 2");
				
			}
			
			if (temperature <= minSpringTemp && springTemp == 2)
			{
				temperature = minSpringTemp;
			}
			
			if (temperature >= maxSpringTemp && springTemp == 2)
			{
				temperature = maxSpringTemp;
			}
		}
		
		//Generates the temperature for Summer
		if (monthCounter >= 5 && monthCounter <= 7)
		{
			
			if (summerTemp == 1)
			{
				temperature = startingSummerTemp;
				summerTemp = 2;
				//Debug.Log("Summer Check 2");
				
			}
			
			if (temperature <= minSummerTemp && summerTemp == 2)
			{
				temperature = minSummerTemp;
			}
			
			if (temperature >= maxSummerTemp && summerTemp == 2)
			{
				temperature = maxSummerTemp;
			}
		}
		
		//Generates the temperature for Fall
		if (monthCounter >= 8 && monthCounter <= 10)
		{
			
			if (fallTemp == 1)
			{
				temperature = startingFallTemp;
				fallTemp = 2;
				//Debug.Log("Fall Check 2");
				
			}
			
			if (temperature <= minFallTemp && fallTemp == 2)
			{
				temperature = minFallTemp;
			}
			
			if (temperature >= maxFallTemp && fallTemp == 2)
			{
				temperature = maxFallTemp;
			}
		}
		
		//Generates the temperature for Winter
		if (monthCounter >= 11 || monthCounter >= 12 || monthCounter <= 1)
		{
			//if (loadWinterTemp == true)
			if (winterTemp == 1)
			{
				temperature = startingWinterTemp;
				winterTemp = 2;
				//Debug.Log("Winter Check 2");
				
			}
			
			if (temperature <= minWinterTemp && winterTemp == 2)
			{
				temperature = minWinterTemp;
			}
			
			if (temperature >= maxWinterTemp && winterTemp == 2)
			{
				temperature = maxWinterTemp;
			}
		}
	
	if (hourCounter >= 18 && hourCounter <= 23 || hourCounter <= 3)
	{
		nightTime = true;
	}
	
	if (hourCounter >= 5 && hourCounter <= 17)
	{
		nightTime = false;
	}
	
	
	//Added 1.7.5
	if (Hour >= 20)
	{
		moon.GetComponent.<Light>().enabled = true;
	}
	
	if (Hour >= 0 && Hour < 4)
	{
		moon.GetComponent.<Light>().enabled = true;
	}
	
	if (Hour > 4 && Hour < 20)
	{
		moon.GetComponent.<Light>().enabled = false;
	}
	//
	
	//1.7.5 Moonlight Intensity Added
	moon.GetComponent.<Light>().intensity = moonLightIntensity;
	//
	
	
	if (monthCounter >= 2 && hourCounter == 0)
	{
		loadSpringTemp =! loadSpringTemp;
	}
	
	if (monthCounter >= 5 && hourCounter == 0)
	{
		loadSummerTemp =! loadSummerTemp;
	}
	
	if (monthCounter >= 8 && hourCounter == 0)
	{
		loadFallTemp =! loadFallTemp;
	}
	
	if (monthCounter >= 11 && hourCounter == 0 || monthCounter == 1 && hourCounter == 0)
	{
		loadWinterTemp =! loadWinterTemp;
	}
	
	if (monthCounter >= 2 && monthCounter <= 4)
		{
			//Generate random temperature
			if (loadSpringTemp == true)
			{
		    	temperature = startingSpringTemp;
		    	loadSpringTemp =! loadSpringTemp;
		    }
		    
		    if (temperature <= minSpringTemp)
				{
					temperature = minSpringTemp;
				}
		
				if (temperature >= maxSpringTemp)
				{
					temperature = maxSpringTemp;
				}
		}
		
		//Generates the temperature for Summer
		if (monthCounter >= 5 && monthCounter <= 7)
		{

				//Generate random temperature
		    	//temperature = Random.Range (80,95);
		    	//temperatureGenerator =! temperatureGenerator;
		    	
		    	if (loadSummerTemp == true)
				{
		    		temperature = startingSummerTemp;
		    		loadSummerTemp =! loadSummerTemp;
		    	}
		    	
		    	if (temperature <= minSummerTemp)
				{
					temperature = minSummerTemp;
				}
		
				if (temperature >= maxSummerTemp)
				{
					temperature = maxSummerTemp;
				}
		}
		
		//Generates the temperature for Fall
		if (monthCounter >= 8 && monthCounter <= 10)
		{
			//Generate random temperature
		    //temperature = Random.Range (40,60);
		    //temperatureGenerator =! temperatureGenerator;
		    
		    if (loadFallTemp == true)
				{
		    		temperature = startingFallTemp;
		    		loadFallTemp =! loadFallTemp;
		    	}
		    
		    if (temperature <= minFallTemp)
				{
					temperature = minFallTemp;
				}
		
				if (temperature >= maxFallTemp)
				{
					temperature = maxFallTemp;
				}
		}
		
		//Generates the temperature for Winter
		if (monthCounter >= 11 || monthCounter >= 1 && monthCounter < 2)
		{
			//Generate random temperature
		    //temperature = Random.Range (15,40);
		    //temperatureGenerator =! temperatureGenerator;
		    
		    if (loadWinterTemp == true)
				{
		    		temperature = startingWinterTemp;
		    		loadWinterTemp =! loadWinterTemp;
		    	}
		    
		    if (temperature <= minWinterTemp)
				{
					temperature = minWinterTemp;
				}
		
				if (temperature >= maxWinterTemp)
				{
					temperature = maxWinterTemp;
				}
		}
	
	if (hourCounter == 18)
	{
		 temperatureGenerator = false;
	}

		//Calculates our moon phases
		if (moonPhaseCalculator == 1)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase1;	
		}
		
		if (moonPhaseCalculator == 2)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase2;	
		}
		
		if (moonPhaseCalculator == 3)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase3;	
		}
		
		if (moonPhaseCalculator == 4)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase4;	
		}
		
		if (moonPhaseCalculator == 5)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase5;	
		}
		
		if (moonPhaseCalculator == 6)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase6;	
		}
		
		if (moonPhaseCalculator == 7)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase7;	
		}
		
		if (moonPhaseCalculator == 8)
		{
			moonObject.GetComponent.<Renderer>().sharedMaterial = moonPhase8;	
		}
		
		if (moonPhaseCalculator == 9)
		{
			moonPhaseCalculator = 1;	
		}	

		
		
	
		//Updated 1.8.1
		//Sun no longer flickers. Sun algorithm has been rewritten. This allows for perfectly smooth shadows while time is flowing.
		sun.transform.eulerAngles = new Vector3(startTime * 360 - 90, sunAngle, -7.0f);
		
		
		//Calculates our minutes into hours
		if(minuteCounter >= 60)
		{	
			
			minuteCounter = minuteCounterCalculator % 60;	
			//Picks our forecast randomly, if random generators are equal
			
		}
		
		//temperature += temperatureCurve.Evaluate(hourCounter);
		
		//Increasing Temperature
		if (hourCounter == 6 && minuteCounter == 0 || hourCounter == 7 && minuteCounter == 0 || hourCounter == 8 && minuteCounter == 0 || hourCounter == 9 && minuteCounter == 0 || hourCounter == 10 && minuteCounter == 0 || hourCounter == 11 && minuteCounter == 0 || hourCounter == 12 && minuteCounter == 0 || hourCounter == 13 && minuteCounter == 0 || hourCounter == 14 && minuteCounter == 0 || hourCounter == 15 && minuteCounter == 0 || hourCounter == 16 && minuteCounter == 0)
		{
			if (temperatureFluctuation == false)
			{
				temperature += Random.Range (1,3);
				temperatureFluctuation =! temperatureFluctuation;
			}
		}
		
		if (hourCounter == 6 && minuteCounter == 1 || hourCounter == 7 && minuteCounter == 1 || hourCounter == 8 && minuteCounter == 1 || hourCounter == 9 && minuteCounter == 1 || hourCounter == 10 && minuteCounter == 1 || hourCounter == 11 && minuteCounter == 1 || hourCounter == 12 && minuteCounter == 1 || hourCounter == 13 && minuteCounter == 1 || hourCounter == 14 && minuteCounter == 1 || hourCounter == 15 && minuteCounter == 1 || hourCounter == 16 && minuteCounter == 0)
		{
			temperatureFluctuation = false;
		}
		
		//Decreasing Temperature
		if (hourCounter <= 5 && minuteCounter == 0 || hourCounter >= 17 && minuteCounter == 0)
		{
			if (temperatureFluctuation == false)
			{
				temperature -= Random.Range (1,3);
				temperatureFluctuation =! temperatureFluctuation;
			}
		}
		
		if (hourCounter <= 4 && minuteCounter == 1 || hourCounter >= 18 && minuteCounter == 1)
		{
			temperatureFluctuation = false;
		}
		
		
		if(minuteCounter == 59)
		{	
			weatherUpdate += 1;
		}
		
		if(minuteCounter == 1)
		{
			weatherUpdate = 0;		
		}
		
		//Calculates our days, months, and years.
		//Added 1.8.2
		if (calendarType == 1)
		{				
			//Calculates our days into months
			if(dayCounter >= 32 && monthCounter == 1 || dayCounter >= 32 && monthCounter == 3 || dayCounter >= 32 && monthCounter == 5 || dayCounter >= 32 && monthCounter == 7 || dayCounter >= 32 && monthCounter == 8 || dayCounter >= 32 && monthCounter == 10 || dayCounter >= 32 && monthCounter == 12)
			{
				dayCounter = dayCounter % 32;
				dayCounter += 1;
				monthCounter += 1;
			}
			
			if(dayCounter == 31 && monthCounter == 4 || dayCounter == 31 && monthCounter == 6 || dayCounter == 31 && monthCounter == 9 || dayCounter == 31 && monthCounter == 11)
			{
				dayCounter = dayCounter % 31;
				dayCounter += 1;
				monthCounter += 1;
			}
			
			
			//Calculates Leap Year
			if(dayCounter >= 30 && monthCounter == 2 && (yearCounter % 4 == 0 && yearCounter % 100 != 0) || (yearCounter % 400 == 0))
			{
				dayCounter = dayCounter % 30;
				dayCounter += 1;
				monthCounter += 1;
			}

			else if (dayCounter >= 29 && monthCounter == 2 && yearCounter % 4 != 0)
			{
				dayCounter = dayCounter % 29;
				dayCounter += 1;
				monthCounter += 1;
			}
			
			
			//Calculates our months into years
			if (monthCounter > 12)
			{
				monthCounter = monthCounter % 13;
				yearCounter += 1;
				monthCounter += 1;
			}
		}
		
		if (calendarType == 2)
		{
			//Calculates our custom days into months
			if(dayCounter > numberOfDaysInMonth)
			{
				dayCounter = dayCounter % numberOfDaysInMonth - 1;
				dayCounter += 1;
				monthCounter += 1;
			}
			
			//Calculates our custom months into years
			if (monthCounter > numberOfMonthsInYear)
			{
				monthCounter = monthCounter % numberOfMonthsInYear - 1;
				yearCounter += 1;
				monthCounter += 1;
			}
		}
		
		
		
	//If staticWeather is true, the weather will never change
	if (staticWeather == false)
	{	
		//20% Chance of weather change
		if (weatherOdds == 20 && weatherChanceSpring == 20 || weatherOdds == 20 && weatherChanceSummer == 20 || weatherOdds == 20 && weatherChanceFall == 20 || weatherOdds == 20 && weatherChanceWinter == 20)
		{
		   //Controls our storms from switching too often
		   if (stormCounter >= 13)
		   {
		  	 weatherForecaster = Random.Range(1,13);
		  	 stormCounter = Random.Range (0,7);
		   }
		}
		
		//40% Chance of weather change
		if (weatherOdds == 40 && weatherChanceSpring == 40 && weatherOdds == 40 && weatherChanceSummer == 40 || weatherOdds == 40 && weatherChanceFall == 40 || weatherOdds == 40 && weatherChanceWinter == 40)
		{
		   //Controls our storms from switching too often
		   if (stormCounter >= 13)
		   {
		  	 weatherForecaster = Random.Range(1,13);
		  	 stormCounter = Random.Range (0,7);
		   }
		}
		
		//60% Chance of weather change
		if (weatherOdds == 60 && weatherChanceSpring == 60 && weatherOdds == 60 && weatherChanceSummer == 60 || weatherOdds == 60 && weatherChanceFall == 60 || weatherOdds == 60 && weatherChanceWinter == 60)
		{
		   //Controls our storms from switching too often
		   if (stormCounter >= 13)
		   {
		  	 weatherForecaster = Random.Range(1,13);
		  	 stormCounter = Random.Range (0,7);
		   }
		}
		
		//80% Chance of weather change
		if (weatherOdds == 80 && weatherChanceSpring == 80 && weatherOdds == 80 && weatherChanceSummer == 80 || weatherOdds == 80 && weatherChanceFall == 80 || weatherOdds == 80 && weatherChanceWinter == 80)
		{
		   //Controls our storms from switching too often
		   if (stormCounter >= 13)
		   {
		  	 weatherForecaster = Random.Range(1,13);
		  	 stormCounter = Random.Range (0,7);
		   }
		}
				
		}
		
	//Calculates our day length so it stays consistent	
	Hour = startTime*24;
	//Hour += Time.deltaTime / dayLength * 24;
	timeOfDay = calculate2*24;
	
	//If timeStopped is checked, time doesn't flow
	if (timeStopped == false)
		{	
			startTime = startTime +Time.deltaTime/dayLength/60;
		}
	
	//Fades the suns intensity for morning and evening
	sun.intensity = (calculate2-0.1) * sunIntensity;
	
	//sunCloudy.intensity = (calculate2-0.35) * 3;
	
	
	if (sunIntensity <= 0)
	{
		sunIntensity = 0;
		sun.enabled = false;
				
		//Added 1.8.1
		//Warning Obsolete Message Update
		gradientSphere.SetActive(false);
	}
			
		if (sunIntensity >= .01)
		{
			sun.enabled = true;
				
			//Added 1.8.1
			//Warning Obsolete Message Update
			gradientSphere.SetActive(true);
		}
			
	if (sunIntensity >= maxSunIntensity)
			{
				sunIntensity = maxSunIntensity;	
				lightSource.GetComponent.<Light>().enabled = false;	
				//sunCloudy.enabled = false;
			}


	//Keeps our calculations looping
	if(startTime < 0.5)
	{
		calculate2 = startTime;
	}
	if(startTime > 0.5)
	{
		calculate2 = (1-startTime);
	}
	
	/*
	//Controls our weather so it doesn't change unrealistically
	if (stormCounter >= 10)
	{
		stormCounter = Random.Range (0,1);
	}
	*/
	
	//Forces precipitation if none has happened in an in-game week, prevents drouts
	if (forceStorm >= 7)
	{
		if (staticWeather == false)
		{	
			weatherForecaster = Random.Range(2,3);
			forceStorm = 0;
		}
	}
	
	//Changes our weather type if there has been precipitation for more than the desired in-game days
		if (changeWeather >= forceWeatherChange && stormControl == true)
		{
			if (staticWeather == false)
			{	
				weatherForecaster = Random.Range(4,11);
				changeWeather = 0;
			}
		}
	
	
	
	if(Hour>2&&Hour<4)
	{
		//Added 1.7.5
		moon.color = Color.Lerp (moonColor, moonFadeColor, (Hour/2)-1);
   		moonObject.GetComponent.<Renderer>().material.color = Color.Lerp (Color.white, moonFadeColor, (Hour/2)-1);
	}
	
	if (weatherForecaster == 1 || weatherForecaster == 2 || weatherForecaster == 3 || weatherForecaster == 12 || weatherForecaster == 9)
		{
			fader += 0.002f;
			fader2 -= 0.01f;
			
			if (fader2 <= 0)
			{
				fader2 = 0;
				//weatherHappened = true; //Try
			}
			
			if (fader >= 1)
			{
				fader = 1;
				weatherHappened = true; //Try
			}
			
			fogMorningColor = Color.Lerp (originalFogColorMorning, stormyFogColorMorning, fader);
			fogDayColor = Color.Lerp (originalFogColorDay, stormyFogColorDay, fader);
			fogDuskColor = Color.Lerp (originalFogColorEvening, stormyFogColorEvening, fader);
			fogNightColor = Color.Lerp (originalFogColorNight, stormyFogColorNight, fader);
			
			
		}
		
		//if (weatherForecaster == 4 && weatherHappened || weatherForecaster == 5  && weatherHappened || weatherForecaster == 6  && weatherHappened || weatherForecaster == 7  && weatherHappened || weatherForecaster == 8 && weatherHappened )
		if (weatherForecaster == 4 || weatherForecaster == 5 || weatherForecaster == 6 || weatherForecaster == 7 || weatherForecaster == 8)
		{
			fader2 += 0.002f;
			fader -= 0.01f;
			
			fogMorningColor = Color.Lerp (stormyFogColorMorning, originalFogColorMorning, fader2);
			fogDayColor = Color.Lerp (stormyFogColorDay, originalFogColorDay, fader2);
			fogDuskColor = Color.Lerp (stormyFogColorEvening, originalFogColorEvening, fader2);
			fogNightColor = Color.Lerp (stormyFogColorNight, originalFogColorNight, fader2);
			
			if (fader2 >= 1)
			{
				weatherHappened = false;
				fader2 = 1;
			}
			
			if (fader <= 0)
			{
				fader = 0;
			}
			
		}
	
	//Dynamic Sounds
	//Calculates morning fading in from night
	if(Hour>4&&Hour<6){
		RenderSettings.ambientLight = Color.Lerp (NightAmbientLight, MorningAmbientLight, (Hour/2)-2);
		sun.color = Color.Lerp (SunNight, SunMorning, (Hour/2)-2);
		RenderSettings.fogColor = Color.Lerp (fogNightColor, fogMorningColor, (Hour/2)-2);
		
		//waterObject.renderer.Material.SetColor ("_ReflectionColor", waterBaseMorningColor);
		//waterObject.renderer.Material.SetColor ("_SpecularColor", waterLightMorningColor);
		
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (NightGradientContrastLight, MorningGradientContrastLight, (Hour/2)-2) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (NightGradientLight, MorningGradientLight, (Hour/2)-2) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (NightGradientLight, MorningGradientLight, (Hour/2)-2) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (NightGradientLight, MorningGradientLight, (Hour/2)-2) );
		
		temp = (Hour/2)-2;
		
		RenderSettings.skybox=SkyBoxMaterial1;
		RenderSettings.skybox.SetFloat("_Blend", 0);
		RenderSettings.skybox.SetFloat("_Blend", (Hour/2)-2);
		SkyBoxMaterial1.SetColor ("_Tint", Color.Lerp (NightSkyboxTint, MorningSkyboxTint, (Hour/2)-2) );
		//horizonObject.renderer.material.color = Color.Lerp (horizonNight, horizonMorning, (Hour/2)-2);
		
		//Added 1.8.1
		//This allows our skies to have a realistic horizon band. The color of this can be adjusted
		SkyBoxMaterial1.SetColor ("_FogTint", Color.Lerp (Color.black, MorningSkyboxTintContrast, (Hour/2)-2) );
		SkyBoxMaterial2.SetColor ("_FogTint", Color.Lerp (Color.black, MorningSkyboxTintContrast, (Hour/2)-2) );
			
		//Added 1.8.1
		lightClouds1.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorNight, cloudColorMorning, (Hour/2)-2) );
		lightClouds1a.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorNight, cloudColorMorning, (Hour/2)-2) );
		
		//Added 1.8.1
		moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FloatMin", (Hour/2)-2);
		moonFade2 = moonObject.GetComponent.<Renderer>().sharedMaterial.GetFloat("_FloatMin") * -50000.0f;
		moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FogAmountMin", (moonFade2));
		
		fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
		fogScript.globalFogColor = Color.Lerp (stormyFogColorDuskDawn_GF, stormyFogColorDuskDawn_GF, (Hour/2)-2);
	
		sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   		sunShaftScript.sunColor = Color.Lerp (DuskAtmosphericLight, MorningAtmosphericLight, (Hour/2)-2);

   		//Added 1.7.5
		moon.color = moonFadeColor;
   		moonObject.GetComponent.<Renderer>().material.color = moonFadeColor;
  
	  	//Fades the stars on morning
		starSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_TintColor", Color.Lerp (starBrightness, moonFadeColor, (Hour/2)-2) );
	}
	

   
   //Calculates day
	if(Hour>6&&Hour<8){
		RenderSettings.ambientLight = Color.Lerp (MorningAmbientLight, MiddayAmbientLight, (Hour/2)-3);
		sun.color = Color.Lerp (SunMorning, SunDay, (Hour/2)-3);
		starSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_TintColor",  starBrightness * fadeStars);
		RenderSettings.fogColor = Color.Lerp (fogMorningColor, fogDayColor, (Hour/2)-3);
		
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (MorningGradientContrastLight, DayGradientContrastLight, (Hour/2)-3) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (MorningGradientLight, DayGradientLight, (Hour/2)-3) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (MorningGradientLight, DayGradientLight, (Hour/2)-3) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (MorningGradientLight, DayGradientLight, (Hour/2)-3) );
	
		//Skybox
		RenderSettings.skybox=SkyBoxMaterial2;
		RenderSettings.skybox.SetFloat("_Blend", 1);
		SkyBoxMaterial2.SetColor ("_Tint", Color.Lerp (MorningSkyboxTint, MiddaySkyboxTint,  (Hour/2)-3) );
		
		//Added 1.8.1
		//This allows our skies to have a realistic horizon band. The color of this can be adjusted
		SkyBoxMaterial2.SetColor ("_FogTint", Color.Lerp (MorningSkyboxTintContrast, MiddaySkyboxTintContrast, (Hour/2)-3) );
		SkyBoxMaterial1.SetColor ("_FogTint", Color.Lerp (MorningSkyboxTintContrast, MiddaySkyboxTintContrast, (Hour/2)-3) );
			
		//Added 1.8.1
		lightClouds1.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorMorning, cloudColorDay, (Hour/2)-3) );
		lightClouds1a.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorMorning, cloudColorDay, (Hour/2)-3) );
		
		moonObject.GetComponent.<Renderer>().material.color = Color.Lerp (moonFadeColor, moonFadeColor, (Hour/2)-3);
	
		fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
		fogScript.globalFogColor = Color.Lerp (stormyFogColorDuskDawn_GF, stormyFogColorDay_GF, (Hour/2)-3);
	
		sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   		sunShaftScript.sunColor = Color.Lerp (MorningAtmosphericLight, MiddayAtmosphericLight, (Hour/2)-3);
	
		fadeStars = 0;
	
   }
   
   
   	//Calculates day
	if(Hour>8&&Hour<16){
		RenderSettings.ambientLight = Color.Lerp (MiddayAmbientLight, MiddayAmbientLight, (Hour/2)-4);
		sun.color = Color.Lerp (SunDay, SunDay, (Hour/2)-4);
		starSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_TintColor",  starBrightness * fadeStars);
		RenderSettings.fogColor = Color.Lerp (fogDayColor, fogDayColor, (Hour/2)-4);
		
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (DayGradientContrastLight, DayGradientContrastLight, (Hour/2)-4) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (DayGradientLight, DayGradientLight, (Hour/2)-4) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (DayGradientLight, DayGradientLight, (Hour/2)-4) );
		gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (DayGradientLight, DayGradientLight, (Hour/2)-4) );
		
	
		//Skybox
		RenderSettings.skybox=SkyBoxMaterial2;
		RenderSettings.skybox.SetFloat("_Blend", 1);
		SkyBoxMaterial2.SetColor ("_Tint", Color.Lerp (MiddaySkyboxTint, MiddaySkyboxTint,  (Hour/2)-4) );
		
		//Added 1.8.1
		//This allows our skies to have a realistic horizon band. The color of this can be adjusted
		SkyBoxMaterial2.SetColor ("_FogTint", Color.Lerp (MiddaySkyboxTintContrast, MiddaySkyboxTintContrast, (Hour/2)-4) );
		SkyBoxMaterial1.SetColor ("_FogTint", Color.Lerp (MiddaySkyboxTintContrast, MiddaySkyboxTintContrast, (Hour/2)-4) );
			
		//Added 1.8.1
		lightClouds1.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorDay, cloudColorDay, (Hour/2)-4) );
		lightClouds1a.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorDay, cloudColorDay, (Hour/2)-4) );
		
		//Horizon
		//horizonObject.renderer.material.color = Color.Lerp (horizonDay, horizonDay, (Hour/2)-4);
		
		moonObject.GetComponent.<Renderer>().material.color = Color.Lerp (moonFadeColor, moonFadeColor, (Hour/2)-4);
	
		fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
		fogScript.globalFogColor = Color.Lerp (stormyFogColorDuskDawn_GF, stormyFogColorDay_GF, (Hour/2)-4);
	
		sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   		sunShaftScript.sunColor = Color.Lerp (MiddayAtmosphericLight, MiddayAtmosphericLight, (Hour/2)-4);
	
		fadeStars = 0;
	
   }
   
   

   

   
    //Calculates dusk fading in from day
	if(Hour>16&&Hour<18)
	{
	RenderSettings.ambientLight = Color.Lerp (MiddayAmbientLight, DuskAmbientLight, (Hour/2)-8);
	sun.color = Color.Lerp (SunDay, SunDusk, (Hour/2)-8);
	RenderSettings.fogColor = Color.Lerp (fogDayColor, fogDuskColor, (Hour/2)-8);
	
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (DayGradientContrastLight, DuskGradientContrastLight, (Hour/2)-8) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (DayGradientLight, DuskGradientLight, (Hour/2)-8) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (DayGradientLight, DuskGradientLight, (Hour/2)-8) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (DayGradientLight, DuskGradientLight, (Hour/2)-8) );
	
	//Skybox
	RenderSettings.skybox=SkyBoxMaterial1;
	RenderSettings.skybox.SetFloat("_Blend", 1);
	SkyBoxMaterial1.SetColor ("_Tint", Color.Lerp (MiddaySkyboxTint, DuskSkyboxTint, (Hour/2)-8) );
	
	//Added 1.8.1
	//This allows our skies to have a realistic horizon band. The color of this can be adjusted
	SkyBoxMaterial1.SetColor ("_FogTint", Color.Lerp (MiddaySkyboxTintContrast, DuskSkyboxTintContrast, (Hour/2)-8) );
	SkyBoxMaterial2.SetColor ("_FogTint", Color.Lerp (MiddaySkyboxTintContrast, DuskSkyboxTintContrast, (Hour/2)-8) );
			
	//Added 1.8.1
	lightClouds1.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorDay, cloudColorEvening, (Hour/2)-8) );
	lightClouds1a.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorDay, cloudColorEvening, (Hour/2)-8) );
			
	//moonObject.renderer.material.SetFloat("_FogAmountMax", 0);
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetColor ("_MoonColor", Color.Lerp (moonFadeColor, moonFadeColor, (Hour/2)-8) );
	
	//horizonObject.renderer.material.color = Color.Lerp (horizonDay, horizonDusk, (Hour/2)-8);
	
	moonObject.GetComponent.<Renderer>().material.color = moonFadeColor;
	
	fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
	fogScript.globalFogColor = Color.Lerp (stormyFogColorDuskDawn_GF, stormyFogColorDuskDawn_GF, (Hour/2)-8);
	
	sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   	sunShaftScript.sunColor = Color.Lerp (MiddayAtmosphericLight, DuskAtmosphericLight, (Hour/2)-8);
	
	fadeStars = 0; 	
	
	}
	
	

	//Calculates night fading in from dusk
	if(Hour>18&&Hour<20){
	RenderSettings.ambientLight = Color.Lerp (DuskAmbientLight, NightAmbientLight, (Hour/2)-9);
	sun.color = Color.Lerp (SunDusk, SunNight, (Hour/2)-9);
	RenderSettings.fogColor = Color.Lerp (fogDuskColor, fogNightColor, (Hour/2)-9);
	
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (DuskGradientContrastLight, NightGradientContrastLight, (Hour/2)-9) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (DuskGradientLight, NightGradientLight, (Hour/2)-9) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (DuskGradientLight, NightGradientLight, (Hour/2)-9) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (DuskGradientLight, NightGradientLight, (Hour/2)-9) );
	
	//Skybox
	RenderSettings.skybox=SkyBoxMaterial1;
	RenderSettings.skybox.SetFloat("_Blend", 1);
	SkyBoxMaterial1.SetColor ("_Tint", Color.Lerp (DuskSkyboxTint, NightSkyboxTint, (Hour/2)-9) );
	
	//Added 1.8.1
	//This allows our skies to have a realistic horizon band. The color of this can be adjusted
	SkyBoxMaterial1.SetColor ("_FogTint", Color.Lerp (DuskSkyboxTintContrast, NightSkyboxTintContrast, (Hour/2)-9) );
	SkyBoxMaterial2.SetColor ("_FogTint", Color.Lerp (DuskSkyboxTintContrast, NightSkyboxTintContrast, (Hour/2)-9) );
			
	//Added 1.8.1
	lightClouds1.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorEvening, cloudColorNight, (Hour/2)-9) );
	lightClouds1a.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorEvening, cloudColorNight, (Hour/2)-9) );

	moonObject.GetComponent.<Renderer>().sharedMaterial.SetColor ("_MoonColor", Color.Lerp (moonFadeColor, starBrightness, (Hour/2)-9) );
	
	//horizonObject.renderer.material.color = Color.Lerp (horizonDusk, horizonNight, (Hour/2)-9);
	
	moonObject.GetComponent.<Renderer>().material.color = moonFadeColor;
	
	fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
	fogScript.globalFogColor = Color.Lerp (stormyFogColorDuskDawn_GF, stormyFogColorNight_GF, (Hour/2)-9);
	
	sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   	sunShaftScript.sunColor = Color.Lerp (DuskAtmosphericLight, DuskAtmosphericLight, (Hour/2)-9);
   	
	
	//sun.enabled = false;
	
	//Unfades the stars for dusk
	//fadeStars += Time.deltaTime * .14;
  	//starSphere.renderer.sharedMaterial.SetColor ("_TintColor",  starBrightness * fadeStars);
  	starSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_TintColor", Color.Lerp (moonFadeColor, starBrightness, (Hour/2)-9) );
  		
  		
  	if (fadeStars >= 1)
  	{
  			fadeStars = 1;
  	}

	}

	
	
	//Calculates night
	if(Hour>20){
	RenderSettings.ambientLight = NightAmbientLight;
	sun.color = Color.Lerp (SunNight, SunNight, (Hour/2)-10);	
	starSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_TintColor",  starBrightness * fadeStars);
	
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (NightGradientContrastLight, NightGradientContrastLight, (Hour/2)-10) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (NightGradientLight, NightGradientLight, (Hour/2)-10) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (NightGradientLight, NightGradientLight, (Hour/2)-10) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (NightGradientLight, NightGradientLight, (Hour/2)-10) );
	
	//Added 1.8.1
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetColor ("_MoonColor", Color.Lerp (starBrightness, starBrightness, (Hour/2)-10) );
			
	//Added 1.8.1
	lightClouds1.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorNight, cloudColorNight, (Hour/2)-10) );
	lightClouds1a.GetComponent.<Renderer>().material.SetColor("_Color", Color.Lerp (cloudColorNight, cloudColorNight, (Hour/2)-10) );		
			
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FogAmountMin", (0));
			
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FloatMax", (Hour/2)-10);
	moonFade = moonObject.GetComponent.<Renderer>().sharedMaterial.GetFloat("_FloatMax") * 50000.0f;
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FogAmountMax", (moonFade));
	
	RenderSettings.fogColor = Color.Lerp (fogNightColor, fogNightColor, (Hour/2)-10);
	
	//Added 1.7.5
	moon.color = Color.Lerp (moonFadeColor, moonColor, (Hour/2)-10);

	moonObject.GetComponent.<Renderer>().material.color = Color.Lerp (moonFadeColor, Color.white, (Hour/2)-10);
	
	//Skybox
	RenderSettings.skybox = SkyBoxMaterial1;
	//RenderSettings.skybox.SetFloat("_Blend", Time.deltaTime * -0.0001);
	//RenderSettings.skybox.SetFloat("_Blend", (-1*timeOfDay/2)-10);
	
	
	RenderSettings.skybox.SetFloat("_Blend", (Hour/-2)+11);
	//SkyBoxMaterial1.SetColor ("_Tint", NightSkyboxTint);

	//horizonObject.renderer.material.color = Color.Lerp (horizonNight, horizonNight, (Hour/2)-10);
	
	
	//waterObject.renderer.Material.SetColor ("_ReflectionColor", waterBaseNightColor);
	//waterObject.renderer.Material.SetColor ("_SpecularColor", waterLightNightColor);
	
	
	fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
	fogScript.globalFogColor = Color.Lerp (stormyFogColorNight, stormyFogColorNight, (Hour/2)-10);
	
	sun.enabled = false;
	
	fadeStars = 1;

	}
	
	
	if(Hour<4){
	RenderSettings.ambientLight = NightAmbientLight;
	sun.color = Color.Lerp (SunNight, SunNight, (Hour/2)-2);	
	starSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_TintColor",  starBrightness * fadeStars);
	
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_PeakColor", Color.Lerp (NightGradientContrastLight, NightGradientContrastLight, (Hour/2)-2) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level2Color", Color.Lerp (NightGradientLight, NightGradientLight, (Hour/2)-2) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_Level3Color", Color.Lerp (NightGradientLight, NightGradientLight, (Hour/2)-2) );
	gradientSphere.GetComponent.<Renderer>().sharedMaterial.SetColor ("_WaterColor", Color.Lerp (NightGradientLight, NightGradientLight, (Hour/2)-2) );
	
	RenderSettings.fogColor = Color.Lerp (fogNightColor, fogNightColor, (Hour/2)-2);
	
	//Skybox
	RenderSettings.skybox = SkyBoxMaterial1;
	RenderSettings.skybox.SetFloat("_Blend", 0);
	SkyBoxMaterial1.SetColor ("_Tint", NightSkyboxTint);
	
	//Added 1.8.1
	//This allows our skies to have a realistic horizon band. The color of this can be adjusted
	SkyBoxMaterial1.SetColor ("_FogTint", Color.black);
	SkyBoxMaterial2.SetColor ("_FogTint", Color.black);
				
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetColor ("_MoonColor", Color.Lerp (starBrightness, starBrightness, (Hour/2)-10) );
			
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FogAmountMin", (0));
	moonObject.GetComponent.<Renderer>().sharedMaterial.SetFloat("_FogAmountMax", (50000));

	//horizonObject.renderer.material.color = Color.Lerp (horizonNight, horizonNight, (Hour/2)-2);
	
	fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
	fogScript.globalFogColor = Color.Lerp (stormyFogColorNight, stormyFogColorNight, (Hour/2)-2);
	
	//sun.enabled = false;
	
	fadeStars = 1;

	}
	

}

function WeatherForecaster () {
  		
  		//Foggy 
 		if (weatherForecaster == 1)
 		{
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl += Time.deltaTime * .01;
			time += Time.deltaTime * .14;
			sunShaftFade -= Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;
			sunIntensity -= .005;
			overrideFog = true;
			dynamicSnowFade -= Time.deltaTime * .0095;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity -= 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity <= 0)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 0;
			}
			//
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance -= 0.75;
				RenderSettings.fogEndDistance -= 0.75;
				
				if (RenderSettings.fogStartDistance <= stormyFogDistanceStart)
				{
					RenderSettings.fogStartDistance = stormyFogDistanceStart;
				}
				
				if (RenderSettings.fogEndDistance <= stormyFogDistance)
				{
					RenderSettings.fogEndDistance = stormyFogDistance;
				}
			}
			
			RenderSettings.fogDensity -= .00017 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0005)
   			{
   				RenderSettings.fogDensity = .0005;
   			}
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;	
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			    
  			if (dynamicSnowFade <= .25)
  			{
  				dynamicSnowFade = .25;
  			}
  			
  			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow); Removed as of 1.6.3 until developer of snow shader updates shader
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;	
  			
			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
   			fogScript.globalDensity += .0005 * Time.deltaTime;
   			fogScript.startDistance -= 5 * Time.deltaTime;
   			
   			
   			if (fogScript.globalDensity >= .007)
   			{
   				fogScript.globalDensity = .007;
   			}
   			
   			if (fogScript.startDistance <= 30)
   			{
   				fogScript.startDistance = 30;
   			}
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
   			
   			
   			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;		
  			
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (fadeStormClouds <= 0)
  			{
  				fadeStormClouds = 0;
  			}
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);
				
					if (windZone.transform.eulerAngles.y <= 0)
					{
						windZone.transform.eulerAngles.y = 1;
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
					//Makes our wind weaker for when the storm ends
					 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 5);
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;
					}
			
				}
  			
  			 //Keeps our fade numbers from going below 0	
  		     if (minFogIntensity <= 0)
  				{
  					minFogIntensity = 0;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
  				}
  		
  				if (fade >= .5)
  				{
  				    sun.enabled = true;
					//sunCloudy.enabled = false;
  				}
  		
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}
  				
  				if (minRainIntensity <= 50)
  				{
  				//rainOnCamera.enabled = false;
  				}
  				
  			if (fade >= .3)
  				{
  				    sun.enabled = true;
					//sunCloudy.enabled = false;
  				}	
  				
  			if (time >= 1)
  				{
  					time = 1;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  				if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  		}
  		
  		
  		 //Light Snow / Light Rain
 		if (weatherForecaster == 2)
 		{

 		
 		if (temperature <= 32 && temperatureType == 1  || temperatureType == 2 && temperature <= 0)
 			{
 				
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeHorizonController += Time.deltaTime * .04;
			fadeStormClouds += Time.deltaTime * .04;
			time += Time.deltaTime * .0014;
			windControlUp += 1;
			sunIntensity -= .005;
			sunShaftFade -= Time.deltaTime * .14;
			minRainIntensity -= 1;
			minSnowIntensity += .2;
			minFogIntensity -= .008;
			minSnowFogIntensity += .008;	
			stormClouds += Time.deltaTime * .011;
			windSnowSoundHandler += Time.deltaTime * .01;
			dynamicSnowFade += Time.deltaTime * .0008;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity -= 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity <= 0)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 0;
			}
			//
			
			minHeavyRainMistIntensity -= .08f;
			
			//Added 1.7.5
 			//If generated precipitation is eqaul to last roll, regenerate intensity (If randomized rain is true)
 			//Light Snow
 			if (lastWeatherType != weatherForecaster && randomizedPrecipitation)
 			{
 				randomizedRainIntensity = Random.Range(100,maxLightSnowIntensity);
 				currentGeneratedIntensity = randomizedRainIntensity;
 				lastWeatherType = weatherForecaster;
 			}
 			//
			
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance -= 0.75;
				RenderSettings.fogEndDistance -= 0.75;
				
				if (RenderSettings.fogStartDistance <= stormyFogDistanceStart)
				{
					RenderSettings.fogStartDistance = stormyFogDistanceStart;
				}
				
				if (RenderSettings.fogEndDistance <= stormyFogDistance)
				{
					RenderSettings.fogEndDistance = stormyFogDistance;
				}
			}
			
			//Slowly increases the wind to make it stronger fort the storm
			if (minRainIntensity >= 1)
				{
  					//Makes our wind stronger for the storm
					windZone.transform.Rotate(Vector3.up * Time.deltaTime * 3);

					windZone.gameObject.SetActive(true);
				}
			
			if (windZone.transform.eulerAngles.y >= 180)
				{
					windZone.transform.eulerAngles.y = 180;
				}
		
			
			//Fades in storm clouds
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;	
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;	
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			    
  			if (dynamicSnowFade >= .59)
  			{
  				dynamicSnowFade = .59;
  			}
  			
  			
  			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
  			
  			//Fades our fog in

   			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   	
   			RenderSettings.fogDensity -= .00012 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0006)
   			{
   				RenderSettings.fogDensity = .0006;
   				fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
   				fogScript.globalDensity += .0008 * Time.deltaTime;
   				fogScript.startDistance -= 5 * Time.deltaTime;
   				
   			if (fogScript.startDistance <= 30)
   			{
   				fogScript.startDistance = 30;
   				fogScript.globalDensity -= .0005 * Time.deltaTime;
   			}
   				
		    if (overrideFog == false)
		    {
		    
		       fogScript.globalDensity += .0005 * Time.deltaTime;
		    
   			if (fogScript.globalDensity >= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
   			  }
   			}
   			
   			if (overrideFog == true)
		    {
		    	fogScript.globalDensity -= .001 * Time.deltaTime;
		    	
		    	if (fogScript.globalDensity <= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
		    }
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
			
			if (windSnowSoundHandler >= 0.5)
			{
				windSnowSoundHandler = 0.5;
			}
			
			//Acivates UniStorm system
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			
  			//Keep rain from going below 0
  			if (minRainIntensity <= 0)
  			{
  				minRainIntensity = 0;
  			}
  			
  			//Keep fog from going below 0
  			if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			
  			//Added 1.7.5
  			//Not using RP
  			if (!randomizedPrecipitation)
  			{
  				//Keeps our snow level maxed at users input
  				if (minSnowIntensity >= maxLightSnowIntensity)
  				{
  					minSnowIntensity = maxLightSnowIntensity;
  				}
  			}
  			
  			//Using RP
  			if (randomizedPrecipitation)
  			{
  				if (minSnowIntensity >= currentGeneratedIntensity)
  				{
  					minSnowIntensity = currentGeneratedIntensity;
  				}
  			}
  			//
  			
  			//Keeps our snow fog level maxed at users input
  			if (minSnowFogIntensity >= maxLightSnowDustIntensity)
  			{
  				minSnowFogIntensity = maxLightSnowDustIntensity;
  			}
  			
  			if (minRainIntensity >= 50)
  			{
  				//rainOnCamera.enabled = true;
  			}
  		
  			if (stormClouds >= .55)
  			{
  				stormClouds = .55;
  			}
  			
  			if (fade >= .40)
  				{
  				    sun.enabled = false;
					//sunCloudy.enabled = true;
  				}
  				
  			if (fade >= .4)
  				{
					//fadeHorizon.renderer.enabled = false;
  				}
  				
  			
  			
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}
  				
  		   if (fadeStormClouds >= 1)
  				{
  					fadeStormClouds = 1;
  				}
  				
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  				if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}	
  				
  				
  			 if (time >= 1)
  				{
  					time = 1;
  				}
  				
  		    //If the game speed is fast forward fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  			}
  		
  		//Light Rain	
  		if (temperature >= 33 && temperatureType == 1 || temperatureType == 2 && temperature >= 1)
  		{
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds += Time.deltaTime * .04;
			fadeHorizon -= .4;
			windControl += Time.deltaTime * .009;
			time += Time.deltaTime * .14;
			sunShaftFade -= Time.deltaTime * .14;
			sunIntensity -= .005;
			minRainIntensity += .2;
			minFogIntensity -= .008;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			stormClouds += Time.deltaTime * .011;
			overrideFog = false;
			dynamicSnowFade -= Time.deltaTime * .0095;
			
			minHeavyRainMistIntensity -= .08f;
			
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity -= 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity <= 0)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 0;
			}
			//
			
			//Added 1.7.5
 			//If generated precipitation is eqaul to last roll, regenerate intensity (If randomized rain is true)
 			//Light Rain
 			if (lastWeatherType != weatherForecaster && randomizedPrecipitation)
 			{
 				randomizedRainIntensity = Random.Range(100,maxLightRainIntensity);
 				currentGeneratedIntensity = randomizedRainIntensity;
 				lastWeatherType = weatherForecaster;
 			}
 			//
 			
 			//Added 1.7.5
  			//Not using RP
  			if (!randomizedPrecipitation)
  			{
  				//Keeps our snow level maxed at users input
  				if (minRainIntensity >= maxLightRainIntensity)
  				{
  					minRainIntensity = maxLightRainIntensity;
  				}
  			}
  			
  			//Using RP
  			if (randomizedPrecipitation)
  			{
  				if (minRainIntensity >= currentGeneratedIntensity)
  				{
  					minRainIntensity = currentGeneratedIntensity;
  				}
  			}
  			//
			
			
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance -= 0.75;
				RenderSettings.fogEndDistance -= 0.75;
				
				if (RenderSettings.fogStartDistance <= stormyFogDistanceStart)
				{
					RenderSettings.fogStartDistance = stormyFogDistanceStart;
				}
				
				if (RenderSettings.fogEndDistance <= stormyFogDistance)
				{
					RenderSettings.fogEndDistance = stormyFogDistance;
				}
			}
			
			
			if (fadeHorizon <= 0)
			{
				fadeHorizon = 0;
			}
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			    
  			    
  			if (dynamicSnowFade <= .25)
  			{
  				dynamicSnowFade = .25;
  			}
  			
  			
  			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  			   
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;	

   			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
   			RenderSettings.fogDensity -= .0005 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0005)
   			{
   				RenderSettings.fogDensity = .0005;
   			}
   				
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
 			
  			rainSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
  			windSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			
  			//Makes our wind light for the light rain forecast
  			if (minRainIntensity >= 1)
			{
  				//Makes our wind stronger for the storm
				windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 3);
			}
			
			if (windZone.transform.eulerAngles.y <= 10)
			{
				windZone.transform.eulerAngles.y = 1;
			}
			
			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  			if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}
			
  			
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			
  			if (stormClouds >= .55)
  			{
  				stormClouds = .55;
  			}
  			
  			
  			//Added 1.7.5
  			//Not using 
  			if (!randomizedPrecipitation)
  			{
  				if (minRainIntensity >= maxLightRainIntensity)
  				{
  					minRainIntensity = maxLightRainIntensity;
  				}
  			}
  			
  			//Using
  			if (randomizedPrecipitation)
  			{
  				if (minRainIntensity >= currentGeneratedIntensity)
  				{
  					minRainIntensity = currentGeneratedIntensity;
  				}
  			}
  			//
  			
  			if (minRainIntensity >= 50)
  			{
  				//rainOnCamera.enabled = true;
  			}
  			
  			//Updated 1.7.5
  			if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			if (fade >= .15)
  				{
  				    sun.enabled = false;
					//sunCloudy.enabled = true;
  				}
  			 
  			 //Gradually fades our rain effects in
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}
  				
  			if (fadeStormClouds >= 1)
  			{
  				fadeStormClouds = 1;
  			}
  				
  			//This keeps the sound levels low because this is just a little rain	
  			  if (windSound.GetComponent.<AudioSource>().volume >= .0)
  				{
  					windSound.GetComponent.<AudioSource>().volume = .0;
  				}
  				
  			  if (rainSound.GetComponent.<AudioSource>().volume >= .3)
  				{
  					rainSound.GetComponent.<AudioSource>().volume = .3;
  				}
  				
  			//This keeps the fog level low because it isn't a storm	
  			if (time >= .5)
  				{
  					time = .5;
  				}
  				
  			//If the game speed is fast unfade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  			}
  		}
  		
  		
    	//Heavy Snow
 		if (weatherForecaster == 3)
 		{
 			if (temperature <= 32 && temperatureType == 1  || temperatureType == 2 && temperature <= 0)
 			{
 				
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeHorizonController += Time.deltaTime * .04;
			fadeStormClouds += Time.deltaTime * .04;
			time += Time.deltaTime * .0014;
			windControlUp += 1;
			sunShaftFade -= Time.deltaTime * .14;
			minRainIntensity -= 1;
			minSnowIntensity += .4;
			minFogIntensity -= .008;
			minSnowFogIntensity += .01;	
			stormClouds += Time.deltaTime * .011;
			dynamicSnowFade += Time.deltaTime * .0012;
			sunIntensity -= .005;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity -= 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity <= 0)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 0;
			}
			//
			
			//Added 1.7.5
 			//If generated precipitation is eqaul to last roll, regenerate intensity (If randomized rain is true)
 			//Heavy Snow
 			if (lastWeatherType != weatherForecaster && randomizedPrecipitation)
 			{
 				randomizedRainIntensity = Random.Range(400,maxSnowStormIntensity);
 				currentGeneratedIntensity = randomizedRainIntensity;
 				lastWeatherType = weatherForecaster;
 			}
 			//
			
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance -= 0.75;
				RenderSettings.fogEndDistance -= 0.75;
				
				if (RenderSettings.fogStartDistance <= stormyFogDistanceStart)
				{
					RenderSettings.fogStartDistance = stormyFogDistanceStart;
				}
				
				if (RenderSettings.fogEndDistance <= stormyFogDistance)
				{
					RenderSettings.fogEndDistance = stormyFogDistance;
				}
			}
			
			
			//Slowly increases the wind to make it stronger for the storm
			if (minSnowIntensity >= 50)
			{
  				//Makes our wind stronger for the storm
				windZone.transform.Rotate(Vector3.up * Time.deltaTime * 3);

				windZone.gameObject.SetActive(true);
			}
			
			if (windZone.transform.eulerAngles.y >= 180)
			{
				windZone.transform.eulerAngles.y = 180;
			}
		
			
			//Fades in storm clouds
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;	
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
			
			
			
			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			
			minHeavyRainMistIntensity -= .08f;
			
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
  			
  			//Fades our fog in

   			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			
   			//fadeHorizonStorm.renderer.material.color.a = fadeHorizonController;	
   			RenderSettings.fogDensity -= .00012 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0006)
   			{
   				RenderSettings.fogDensity = .0006;
   				fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
   				fogScript.globalDensity += .0008 * Time.deltaTime;
   				fogScript.startDistance -= 5 * Time.deltaTime;
   				
   			if (fogScript.startDistance <= 30)
   			{
   				fogScript.startDistance = 30;
   				fogScript.globalDensity -= .0005 * Time.deltaTime;
   			}
   				
		    if (overrideFog == false)
		    {
		    
		       fogScript.globalDensity += .0005 * Time.deltaTime;
		    
   			if (fogScript.globalDensity >= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
   			  }
   			}
   			
   			if (overrideFog == true)
		    {
		    	fogScript.globalDensity -= .001 * Time.deltaTime;
		    	
		    	if (fogScript.globalDensity <= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
		    }
   			
   			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			if (dynamicSnowFade >= .59)
   			{
   				dynamicSnowFade = .59;
   			}
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSnowSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
			
  			
  			
  			//Keep rain from going below 0
  			if (minRainIntensity <= 0)
  			{
  				minRainIntensity = 0;
  			}
  			
  			//Keep fog from going below 0
  			if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			
  			//Added 1.7.5
  			//Not using RP
  			if (!randomizedPrecipitation)
  			{
  				//Keeps our snow level maxed at users input
  				if (minSnowIntensity >= maxSnowStormIntensity )
  				{
  					minSnowIntensity = maxSnowStormIntensity ;
  				}
  			}
  			
  			//Using RP
  			if (randomizedPrecipitation)
  			{
  				if (minSnowIntensity >= currentGeneratedIntensity)
  				{
  					minSnowIntensity = currentGeneratedIntensity;
  				}
  			}
  			//
  			
  			//Keeps our snow fog level maxed at users input
  			if (minSnowFogIntensity >= maxHeavySnowDustIntensity)
  			{
  				minSnowFogIntensity = maxHeavySnowDustIntensity;
  			}
  		
  		
  			if (stormClouds >= .55)
  			{
  				stormClouds = .55;
  			}
  			
  			if (fade >= .40)
  				{
  				    //sun.enabled = false;
					//sunCloudy.enabled = true;
  				}
  				
  			if (fade >= .4)
  				{
					//fadeHorizon.renderer.enabled = false;
  				}
  				
  			
  			
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}
  				
  		   if (fadeStormClouds >= 1)
  				{
  					fadeStormClouds = 1;
  				}
  				
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  				if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}	
  				
  				
  			 if (time >= 1)
  				{
  					time = 1;
  				}
  				
  		    //If the game speed is fast forward fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  			}
  		
  		//Thunder Storm		
 		if (temperature >= 33 && temperatureType == 1 || temperatureType == 2 && temperature >= 1)
 		{
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeHorizonController += Time.deltaTime * .04;
			fadeStormClouds += Time.deltaTime * .04;
			time += Time.deltaTime * .0014;
			windControlUp += 1;
			sunShaftFade -= Time.deltaTime * .14;
			minRainIntensity += .2;
			minFogIntensity += .008;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;	
			stormClouds += Time.deltaTime * .011;
			sunIntensity -= .005;
			dynamicSnowFade -= Time.deltaTime * .0095;
			
			minHeavyRainMistIntensity += .008;
				
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity -= 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity <= 0)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 0;
			}
			//
			
			//Added 1.7.5
 			//If generated precipitation is eqaul to last roll, regenerate intensity (If randomized rain is true)
 			//Heavy Rain
 			if (lastWeatherType != weatherForecaster && randomizedPrecipitation)
 			{
 				randomizedRainIntensity = Random.Range(400,maxStormRainIntensity);
 				currentGeneratedIntensity = randomizedRainIntensity;
 				lastWeatherType = weatherForecaster;
 			}
 			// 
			
			Lightning ();
			
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance -= 0.75;
				RenderSettings.fogEndDistance -= 0.75;
				
				if (RenderSettings.fogStartDistance <= stormyFogDistanceStart)
				{
					RenderSettings.fogStartDistance = stormyFogDistanceStart;
				}
				
				if (RenderSettings.fogEndDistance <= stormyFogDistance)
				{
					RenderSettings.fogEndDistance = stormyFogDistance;
				}
			}
			
			
			//Slowly increases the wind to make it stronger fort the storm
			if (minRainIntensity >= 1)
			{
  				//Makes our wind stronger for the storm
				windZone.transform.Rotate(Vector3.up * Time.deltaTime * 3);

				windZone.gameObject.SetActive(true);
			}
			
			if (windZone.transform.eulerAngles.y >= 180)
			{
				windZone.transform.eulerAngles.y = 180;
			}
			
			
			if (dynamicSnowFade <= .25)
  			{
  				dynamicSnowFade = .25;
  			}
  			
  			
  			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
		
			
			//Fades in storm clouds
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;	
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;	
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			    
  		    //Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;	
			
			if (minHeavyRainMistIntensity >= maxHeavyRainMistIntensity)
				{
					minHeavyRainMistIntensity = maxHeavyRainMistIntensity;
				}
  			
  			//Fades our fog in

   			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			
   			//fadeHorizonStorm.renderer.material.color.a = fadeHorizonController;
   				
   			RenderSettings.fogDensity -= .00012 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0006)
   			{
   				RenderSettings.fogDensity = .0006;
   				fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
   				fogScript.globalDensity += .0008 * Time.deltaTime;
   				fogScript.startDistance -= 5 * Time.deltaTime;
   				
   			if (fogScript.startDistance <= 30)
   			{
   				fogScript.startDistance = 30;
   				fogScript.globalDensity -= .0005 * Time.deltaTime;
   			}
   				
		    if (overrideFog == false)
		    {
		    
		       fogScript.globalDensity += .0005 * Time.deltaTime;
		    
   			if (fogScript.globalDensity >= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
   			  }
   			}
   			
   			if (overrideFog == true)
		    {
		    	fogScript.globalDensity -= .001 * Time.deltaTime;
		    	
		    	if (fogScript.globalDensity <= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
		    }
		    
		    
		    //Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
   			
  			
  			rainSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
  			windSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			
  			if (rainSound.GetComponent.<AudioSource>().volume >= .8)
  				{
  					rainSound.GetComponent.<AudioSource>().volume = .8;
  				}
			
			//Acivates UniStorm system
  			//GetComponent(UniStormThunder_JS).enabled = true;
  			
  			
  			
  			
  			//Added 1.7.5
  			//Not using RP
  			if (!randomizedPrecipitation)
  			{
  				//Gradually fades our rain effects in
  				if (minRainIntensity >= maxStormRainIntensity)
  				{
  					minRainIntensity = maxStormRainIntensity;
  				}
  			}
  			
  			//Using RP
  			if (randomizedPrecipitation)
  			{
  				if (minRainIntensity >= currentGeneratedIntensity)
  				{
  					minRainIntensity = currentGeneratedIntensity;
  				}
  			}
  			//
  			
  			if (minRainIntensity >= 50)
  			{
  				//rainOnCamera.enabled = true;
  			}
  			
  			if (minFogIntensity >= maxStormMistCloudsIntensity)
  			{
  				minFogIntensity = maxStormMistCloudsIntensity;
  			}
  		
  		
  			if (stormClouds >= .55)
  			{
  				stormClouds = .55;
  			}
  			
  			if (fade >= .40)
  				{
  				    
  				}
  				
  			if (fade >= .4)
  				{
					//fadeHorizon.renderer.enabled = false;
  				}
  				
  			//Increase storm cloud density	
  			if (fade2 >= .75)
  				{
					fade2 = .75;
  				}
  			
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}
  				
  		   if (fadeStormClouds >= 1)
  				{
  					fadeStormClouds = 1;
  				}
  				
			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  			if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}
  				
  				
  			 if (time >= 1)
  				{
  					time = 1;
  				}
  				
  		    //If the game speed is fast forward fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  			}
  		}
  		
  		
		//Partly Cloudy 1
 		if (weatherForecaster == 4)
 		{
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl -= Time.deltaTime;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;	
			sunIntensity += .005;
			sun.enabled = true;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			overrideFog = false;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
					
					
  			    }
					
  			if (cloudType == 2)
			{ 
  				//lightClouds1.renderer.enabled = true;

  				lightClouds2.GetComponent.<Renderer>().enabled = true;

  				lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds4.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds5.GetComponent.<Renderer>().enabled = false;
  				
  				highClouds1.GetComponent.<Renderer>().enabled = true;
  				
  				highClouds2.GetComponent.<Renderer>().enabled = false;
  				
  				mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  			}
  			
  			partlyCloudyFader += 0.0025f;

			//Added 1.8.1 Final
			if (cloudType == 1)
			{
				//partlyCloudyClouds1.renderer.material.color.a = fade2;
				partlyCloudyClouds1.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				partlyCloudyClouds2.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);

				if (partlyCloudyFader >= 1)
				{
					partlyCloudyFader = 1;
				}
			}

  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
			
  			
  			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
			
			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   		
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			
 
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 						
  			//Deactivates UniStorm		
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			if (minRainIntensity >= 1)
  			{
  				//rainOnCamera.enabled = false;
  				//Fades our sunsafts
   				//sunShaftScript = cameraThing.camera.GetComponent (SunShafts);
   				//sunShaftScript.sunShaftIntensity += .005;
  			}
  			
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);

					windZone.gameObject.SetActive(false);
				
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;

						windZone.gameObject.SetActive(false);
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
				//Makes our wind weaker for when the storm ends
				 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 12);
				 
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
					windZone.transform.eulerAngles.y = 0;
					}
			
				}
	
	
  			//Keeps our fade numbers from going below 0
  		    if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			 if (fade <= 0)
  				{
  				fade = 0;
  				
  				}
  				
  				
  			if (fadeStormClouds <= 0)
  				{
  					fadeStormClouds = 0;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   			//ControlUnityFog
   			//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   			if (RenderSettings.fogDensity >= fogDensity)
   			{
   				RenderSettings.fogDensity = fogDensity;
   			}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  		}
  		
  		//Partly Cloudy 2
 		if (weatherForecaster == 5)
 		{
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl -= Time.deltaTime;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			clearClouds -= Time.deltaTime * 1;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;	
			sunIntensity += .005;
			sun.enabled = true;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			overrideFog = false;
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
  			    }
			
		if (cloudType == 2)
		{ 				
  			//lightClouds1.renderer.enabled = false;

  			lightClouds2.GetComponent.<Renderer>().enabled = false;

  			lightClouds3.GetComponent.<Renderer>().enabled = true;
 
  			lightClouds4.GetComponent.<Renderer>().enabled = true; //switched
 
  			lightClouds5.GetComponent.<Renderer>().enabled = false; //these
  			
  			highClouds1.GetComponent.<Renderer>().enabled = false;
  				
  			highClouds2.GetComponent.<Renderer>().enabled = true;
  			
  			mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  		}
  		
  		partlyCloudyFader += 0.0025f;

			//Added 1.8.1 Final
			if (cloudType == 1)
			{
				//partlyCloudyClouds1.renderer.material.color.a = fade2;
				partlyCloudyClouds1.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				partlyCloudyClouds2.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);

				if (partlyCloudyFader >= 1)
				{
					partlyCloudyFader = 1;
				}
			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;	
			
  			
  			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
			
			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
   			
   			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 						
  			//Deactivates UniStorm		
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			if (minRainIntensity >= 1)
  			{
  				//rainOnCamera.enabled = false;
  			}
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);

					windZone.gameObject.SetActive(false);
				
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;

						windZone.gameObject.SetActive(false);
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
				//Makes our wind weaker for when the storm ends
				 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 12);
				 
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
					windZone.transform.eulerAngles.y = 0;
					}
			
				}
	
	
  			//Keeps our fade numbers from going below 0
  		    if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			 if (fade <= 0)
  				{
  				fade = 0;
  				
  				}
  				
  				
  			if (fadeStormClouds <= 0)
  				{
  					fadeStormClouds = 0;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   			//ControlUnityFog
   			//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   			if (RenderSettings.fogDensity >= fogDensity)
   			{
   				RenderSettings.fogDensity = fogDensity;
   			}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  		}
  		
  		//Partly Cloudy 3
 		if (weatherForecaster == 6)
 		{
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl -= Time.deltaTime;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			clearClouds -= Time.deltaTime * 1;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;	
			sunIntensity += .005;
			sun.enabled = true;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			overrideFog = false;
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
  			    }
		
		if (cloudType == 2)
		{ 			
  			//lightClouds1.renderer.enabled = false;

  			lightClouds2.GetComponent.<Renderer>().enabled = false;

  			lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  			lightClouds4.GetComponent.<Renderer>().enabled = false;
 
  			lightClouds5.GetComponent.<Renderer>().enabled = true;
  			
  			highClouds1.GetComponent.<Renderer>().enabled = true;
  				
  			highClouds2.GetComponent.<Renderer>().enabled = false;
  			
  			mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  		}
  		
  		partlyCloudyFader += 0.0025f;

			//Added 1.8.1 Final
			if (cloudType == 1)
			{
				//partlyCloudyClouds1.renderer.material.color.a = fade2;
				partlyCloudyClouds1.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				partlyCloudyClouds2.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);

				if (partlyCloudyFader >= 1)
				{
					partlyCloudyFader = 1;
				}
			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;	
			
  			
  			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
			
			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}

  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 						
  			//Deactivates UniStorm		
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			if (minRainIntensity >= 1)
  			{

  			}
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);

					windZone.gameObject.SetActive(false);
				
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;

						windZone.gameObject.SetActive(false);
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
				//Makes our wind weaker for when the storm ends
				 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 12);
				 
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
					windZone.transform.eulerAngles.y = 0;
					}
			
				}
	
	
  			//Keeps our fade numbers from going below 0
  		    if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			 if (fade <= 0)
  				{
  				fade = 0;
  				
  				}
  				
  				
  			if (fadeStormClouds <= 0)
  				{
  					fadeStormClouds = 0;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   			//ControlUnityFog
   			//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   			if (RenderSettings.fogDensity >= fogDensity)
   			{
   				RenderSettings.fogDensity = fogDensity;
   			}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  		}
  		
  		//Mostly clear 1
 		if (weatherForecaster == 7)
 		{
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl += Time.deltaTime * .01;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			sunIntensity += .005;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			//light.enabled = false;
			sun.enabled = true;
			stormClouds -= Time.deltaTime * .011;
			clearClouds += Time.deltaTime * 1;
			overrideFog = false;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//	
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
					
					//Fades our sunsafts
   					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 2;
  			    }
  			    
  			    
  			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  		
  		if (cloudType == 2)
		{ 	
  			//lightClouds1.renderer.enabled = false;

  			lightClouds2.GetComponent.<Renderer>().enabled = false;

  			lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  			lightClouds5.GetComponent.<Renderer>().enabled = false;
 
  			lightClouds4.GetComponent.<Renderer>().enabled = false;
  			
  			highClouds1.GetComponent.<Renderer>().enabled = true;
  				
  			highClouds2.GetComponent.<Renderer>().enabled = false;
  			
  			mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  		}
  		
  		partlyCloudyFader -= 0.005f;
			
			//Added 1.8.1 Final
			if (cloudType == 1)
			{
				//partlyCloudyClouds1.renderer.material.color.a = fade2;
				partlyCloudyClouds1.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				partlyCloudyClouds2.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				
				if (partlyCloudyFader <= 0)
				{
					partlyCloudyFader = 0;
				}
			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
		
  			
			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
  
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			

  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;

  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);
				
					if (windZone.transform.eulerAngles.y <= 0)
					{
						windZone.transform.eulerAngles.y = 1;
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
					//Makes our wind weaker for when the storm ends
					 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 5);
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;
					}
			
				}
			
			
  			 //Keeps our fade numbers from going below 0
  		     if (minFogIntensity <= 0)
  				{
  					minFogIntensity = 0;
  				}
  				
  			if (minRainIntensity >= 1)
  				{
  					//rainOnCamera.enabled = false;
  				}
  		
  			if (fadeStormClouds <= 0)
  			{
  				fadeStormClouds = 0;
  			}
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  		
  			 if (fade <= 0)
  				{
  					fade = 0;
  				}
  				
  			if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   				//ControlUnityFog
   				//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   				if (RenderSettings.fogDensity >= fogDensity)
   					{
   						RenderSettings.fogDensity = fogDensity;
   					}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  		}
  		
  		//Mostly clear 2
 		if (weatherForecaster == 8)
 		{
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl += Time.deltaTime * .01;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			sunIntensity += .005;
			sun.enabled = true;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			//light.enabled = false;
			stormClouds -= Time.deltaTime * .011;
			clearClouds += Time.deltaTime * 1;
			overrideFog = false;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}	
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
					
					//Fades our sunsafts
   					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 2;
  			    }
  			    
  			    
  			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  		
  		if (cloudType == 2)
		{ 		
  			//lightClouds1.renderer.enabled = false;

  			lightClouds2.GetComponent.<Renderer>().enabled = false;

  			lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  			lightClouds5.GetComponent.<Renderer>().enabled = false;
 
  			lightClouds4.GetComponent.<Renderer>().enabled = false;
  			
  			highClouds1.GetComponent.<Renderer>().enabled = false;
  				
  			highClouds2.GetComponent.<Renderer>().enabled = true;
  			
  			mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  		}
  		
  		partlyCloudyFader -= 0.005f;
			
			//Added 1.8.1 Final
			if (cloudType == 1)
			{
				//partlyCloudyClouds1.renderer.material.color.a = fade2;
				partlyCloudyClouds1.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				partlyCloudyClouds2.GetComponent.<Renderer>().material.color = new Color(lightClouds1.GetComponent.<Renderer>().material.color.r, lightClouds1.GetComponent.<Renderer>().material.color.g, lightClouds1.GetComponent.<Renderer>().material.color.b, partlyCloudyFader);
				
				if (partlyCloudyFader <= 0)
				{
					partlyCloudyFader = 0;
				}
			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;	
		
  			
			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
  
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			
			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			

  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;

  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);
				
					if (windZone.transform.eulerAngles.y <= 0)
					{
						windZone.transform.eulerAngles.y = 1;
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
					//Makes our wind weaker for when the storm ends
					 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 5);
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;
					}
			
				}
			
			
  			 //Keeps our fade numbers from going below 0
  		     if (minFogIntensity <= 0)
  				{
  					minFogIntensity = 0;
  				}
  				
  			if (minRainIntensity >= 1)
  				{
  					//rainOnCamera.enabled = false;
  				}
  		
  			if (fadeStormClouds <= 0)
  			{
  				fadeStormClouds = 0;
  			}
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  		
  			 if (fade <= 0)
  				{
  					fade = 0;
  				}
  				
  			if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   				//ControlUnityFog
   				//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   				if (RenderSettings.fogDensity >= fogDensity)
   					{
   						RenderSettings.fogDensity = fogDensity;
   					}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  		}
  		
  		//Mostly Cloudy
 		if (weatherForecaster == 11)
 		{
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl -= Time.deltaTime;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;	
			sunIntensity += .005;
			sun.enabled = true;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			overrideFog = false;
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
					
					//Fades our sunsafts
   					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 2;
					
  			    }
					
  		if (cloudType == 2)
		{ 	
  				//lightClouds1.renderer.enabled = false;

  				lightClouds2.GetComponent.<Renderer>().enabled = true;

  				lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds4.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds5.GetComponent.<Renderer>().enabled = false;
  				
  				highClouds1.GetComponent.<Renderer>().enabled = false;
  				
  				highClouds2.GetComponent.<Renderer>().enabled = false;
  				
  				mostlyCloudyClouds.GetComponent.<Renderer>().enabled = true;
  		}

  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
			
  			
  			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
   			
   			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   		
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 						
  			//Deactivates UniStorm		
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			if (minRainIntensity >= 1)
  			{
  				//rainOnCamera.enabled = false;
  			}
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);

					windZone.gameObject.SetActive(false);
				
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;

						windZone.gameObject.SetActive(false);
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
				//Makes our wind weaker for when the storm ends
				 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 12);
				 
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
					windZone.transform.eulerAngles.y = 0;
					}
			
				}
	
	
  			//Keeps our fade numbers from going below 0
  		    if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			 if (fade <= 0)
  				{
  				fade = 0;
  				
  				}
  				
  				
  			if (fadeStormClouds <= 0)
  				{
  					fadeStormClouds = 0;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   			//ControlUnityFog
   			//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   			if (RenderSettings.fogDensity >= fogDensity)
   			{
   				RenderSettings.fogDensity = fogDensity;
   			}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  		}
  		
  		//Cloudy
 		if (weatherForecaster == 9)
 		{
  			windControl += Time.deltaTime * .01;
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeStormClouds -= Time.deltaTime * .04;
			time -= Time.deltaTime * .14;
			sunIntensity -= .005;
			sunShaftFade -= Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;
			overrideFog = false;
			dynamicSnowFade -= Time.deltaTime * .0095; 

			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity -= 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity <= 0)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 0;
			}
			//	
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			    
  			    
  			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
  			
			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
   			RenderSettings.fogDensity -= .00012 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0005)
   			{
   				RenderSettings.fogDensity = .0005;
   			}
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			} 			
  				
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 	
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);
				
					if (windZone.transform.eulerAngles.y <= 0)
					{
						windZone.transform.eulerAngles.y = 1;
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
					//Makes our wind weaker for when the storm ends
					 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 5);
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;
					}
			
				}
  			
  			
 			//Keeps our fade numbers from going below 0
  			if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  				sun.enabled = true;
				//sunCloudy.enabled = false;
  			}
  		
  			if (fadeStormClouds <= 0)
  			{
  				fadeStormClouds = 0;
  			}
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  		
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}	
  				
  				if (minRainIntensity <= 50)
  				{
  					//rainOnCamera.enabled = false;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  				if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  		
  		}
  		
  		
  		//Butterflies (Summer Only)
 		if (weatherForecaster == 10)
 		{
 		  if (monthCounter >= 5 && monthCounter <= 7)
 		  {
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl -= Time.deltaTime;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			butterfliesFade += .04;
			windyLeavesFade -= .04;
			clearClouds -= Time.deltaTime * 1;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;	
			sunIntensity += .005;
			sun.enabled = true;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			overrideFog = false;
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
  			    }
			
			if (cloudType == 2)
			{ 				
  		    	//lightClouds1.renderer.enabled = false;

  				lightClouds2.GetComponent.<Renderer>().enabled = false;

  				lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds4.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds5.GetComponent.<Renderer>().enabled = true;
  				
  				highClouds1.GetComponent.<Renderer>().enabled = false;
  				
  				highClouds2.GetComponent.<Renderer>().enabled = false;
  				
  				mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  			}
  			
  			//Fade in our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade >= 3)
  			{
  				butterfliesFade = 3;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			//Fade our particles
  			rain.GetComponent.<ParticleEmitter>().minEmission = minRainIntensity;
			rain.GetComponent.<ParticleEmitter>().maxEmission = minRainIntensity;
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;	
			
			windyLeaves.GetComponent.<ParticleEmitter>().minEmission = windyLeavesFade;
			windyLeaves.GetComponent.<ParticleEmitter>().maxEmission = windyLeavesFade;	
			
  			
  			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
   			
   			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   			
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 						
  			//Deactivates UniStorm		
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			if (minRainIntensity <= 50)
  			{
  				//rainOnCamera.enabled = false;
  			}
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);

					windZone.gameObject.SetActive(false);

					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;

						windZone.gameObject.SetActive(false);
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
				//Makes our wind weaker for when the storm ends
				 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 12);
				 
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
					windZone.transform.eulerAngles.y = 0;
					}
			
				}
	
	
  			//Keeps our fade numbers from going below 0
  		    if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			 if (fade <= 0)
  				{
  				fade = 0;
  				
  				}
  				
  				
  			if (fadeStormClouds <= 0)
  				{
  					fadeStormClouds = 0;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   			//ControlUnityFog
   			//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   			if (RenderSettings.fogDensity >= fogDensity)
   			{
   				RenderSettings.fogDensity = fogDensity;
   			}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  			}
  		}
  		
  		
  		//Heavy Rain (No Thunder)
 		if (weatherForecaster == 12)
 		{
 			if (temperature >= 33)
 			{
			fade += Time.deltaTime * .04;
			fade2 += Time.deltaTime * .04;
			butterfliesFade -= .04;
			windyLeavesFade -= .04;
			fadeHorizonController += Time.deltaTime * .04;
			fadeStormClouds += Time.deltaTime * .04;
			time += Time.deltaTime * .0014;
			windControlUp += 1;
			sunShaftFade -= Time.deltaTime * .14;
			minRainIntensity += .2;
			minFogIntensity += .008;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;	
			stormClouds += Time.deltaTime * .011;
			sunIntensity -= .005;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			
			minHeavyRainMistIntensity += 0.008;
			
			
			//Added 1.7.5
 			//If generated precipitation is eqaul to last roll, regenerate intensity (If randomized rain is true)
 			//Heavy Snow
 			if (lastWeatherType != weatherForecaster && randomizedPrecipitation)
 			{
 				randomizedRainIntensity = Random.Range(400,maxStormRainIntensity);
 				currentGeneratedIntensity = randomizedRainIntensity;
 				lastWeatherType = weatherForecaster;
 			}
 			//
			
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance -= 0.75;
				RenderSettings.fogEndDistance -= 0.75;
				
				if (RenderSettings.fogStartDistance <= stormyFogDistanceStart)
				{
					RenderSettings.fogStartDistance = stormyFogDistanceStart;
				}
				
				if (RenderSettings.fogEndDistance <= stormyFogDistance)
				{
					RenderSettings.fogEndDistance = stormyFogDistance;
				}
			}
			
			
			//Slowly increases the wind to make it stronger fort the storm
			if (minRainIntensity >= 1)
			{
  				//Makes our wind stronger for the storm
				windZone.transform.Rotate(Vector3.up * Time.deltaTime * 3);

				windZone.gameObject.SetActive(true);
			}
			
			if (windZone.transform.eulerAngles.y >= 180)
			{
				windZone.transform.eulerAngles.y = 180;
			}
		
			
			//Fades in storm clouds
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;	
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;	
			
			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			    
  		    //Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
  			
  			if (windyLeavesFade <= 0)
  			{
  				windyLeavesFade = 0;
  			}
  			
  			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
			
			if (minHeavyRainMistIntensity >= maxHeavyRainMistIntensity)
			{
				minHeavyRainMistIntensity = maxHeavyRainMistIntensity;
			}
  			
  			//Fades our fog in

   			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			
   			//fadeHorizonStorm.renderer.material.color.a = fadeHorizonController;	
   			RenderSettings.fogDensity -= .00012 * Time.deltaTime;
   			
   			if (RenderSettings.fogDensity <= .0006)
   			{
   				RenderSettings.fogDensity = .0006;
   				fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
   				fogScript.globalDensity += .0008 * Time.deltaTime;
   				fogScript.startDistance -= 5 * Time.deltaTime;
   				
   			if (fogScript.startDistance <= 30)
   			{
   				fogScript.startDistance = 30;
   				fogScript.globalDensity -= .0005 * Time.deltaTime;
   			}
   				
		    if (overrideFog == false)
		    {
		    
		       fogScript.globalDensity += .0005 * Time.deltaTime;
		    
   			if (fogScript.globalDensity >= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
   			  }
   			}
   			
   			if (overrideFog == true)
		    {
		    	fogScript.globalDensity -= .001 * Time.deltaTime;
		    	
		    	if (fogScript.globalDensity <= .0038)
   			    {   			    
   					fogScript.globalDensity = .0038;
   			    }
		    }
		    
		    //Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}
  			
  			rainSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
  			windSound.GetComponent.<AudioSource>().volume += Time.deltaTime * .01;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			
  			//Added 1.7.5
  			//Not using RP
  			if (!randomizedPrecipitation)
  			{
  				//Gradually fades our rain effects in
  				if (minRainIntensity >= maxStormRainIntensity)
  				{
  					minRainIntensity = maxStormRainIntensity;
  				}
  			}
  			
  			//Using RP
  			if (randomizedPrecipitation)
  			{
  				if (minRainIntensity >= currentGeneratedIntensity)
  				{
  					minRainIntensity = currentGeneratedIntensity;
  				}
  			}
  			//
  			
  			if (minRainIntensity >= 50)
  			{
  				//rainOnCamera.enabled = true;
  			}
  			
  			if (minFogIntensity >= maxStormMistCloudsIntensity)
  			{
  				minFogIntensity = maxStormMistCloudsIntensity;
  			}
  		
  		
  			if (stormClouds >= .55)
  			{
  				stormClouds = .55;
  			}
  			
  			if (fade >= .40)
  				{
  				    
  				}
  				
  			if (fade >= .4)
  				{
					//fadeHorizon.renderer.enabled = false;
  				}
  				
  			if (fade2 >= .75)
  				{
					fade2 = .75;
  			    }
  			
  			 if (fade >= 1)
  				{
  					fade = 1;
  				}
  				
  		   if (fadeStormClouds >= 1)
  				{
  					fadeStormClouds = 1;
  				}
  				
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   			sunShaftScript.sunShaftIntensity -= .005;
  				
  				if (sunShaftScript.sunShaftIntensity <= .1)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 0;
  				}	
  				
  				
  			 if (time >= 1)
  				{
  					time = 1;
  				}
  				
  		    //If the game speed is fast forward fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 1;
  				}
  			}
  		}
  		
  	//Falling Fall Leaves
 		if (weatherForecaster == 13)
 		{
 		  if (monthCounter >= 8 && monthCounter <= 10)
 		  {
			fade -= Time.deltaTime * .09;
			fade2 -= Time.deltaTime * .08;
			butterfliesFade -= .04;
			windyLeavesFade += .04;
			fadeStormClouds -= Time.deltaTime * .04;
			windControl -= Time.deltaTime;
			time -= Time.deltaTime * .14;
			sunShaftFade += Time.deltaTime * .14;
			minRainIntensity -= 1;
			minFogIntensity -= .04;
			minHeavyRainMistIntensity -= .08f;
			minSnowFogIntensity -= .024;	
			minSnowIntensity -= .9;
			stormClouds -= Time.deltaTime * .011;
			//light.enabled = false;	
			sunIntensity += .005;
			sun.enabled = true;
			dynamicSnowFade -= Time.deltaTime * .0095; 
			overrideFog = false;
			
			heavyClouds.GetComponent.<Renderer>().material.color.a = fade;
			heavyCloudsLayer1.GetComponent.<Renderer>().material.color.a = fade2;	
			heavyCloudsLayerLight.GetComponent.<Renderer>().material.color.a = fade2;
			
			//Added 1.7.5
			lightFlareObject.GetComponent.<Light>().intensity += 0.0022f;
			
			if (lightFlareObject.GetComponent.<Light>().intensity >= 1f)
			{
				lightFlareObject.GetComponent.<Light>().intensity = 1f;
			}
			//
			
			//Added 1.7
			if (RenderSettings.fogMode == FogMode.Linear)
			{
				RenderSettings.fogStartDistance += 0.75;
				RenderSettings.fogEndDistance += 0.75;
				
				if (RenderSettings.fogStartDistance >= fogStartDistance)
				{
					RenderSettings.fogStartDistance = fogStartDistance;
				}
				
				if (RenderSettings.fogEndDistance >= fogEndDistance)
				{
					RenderSettings.fogEndDistance = fogEndDistance;
				}
			}
			
			if (fade2 <= 0)
  				{
					fade2 = 0;
					
					//Fades our sunsafts
   					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
   					sunShaftScript.sunShaftIntensity = 2;
					
  			    }
					
  			if (cloudType == 2)
			{ 
  				//lightClouds1.renderer.enabled = true;

  				lightClouds2.GetComponent.<Renderer>().enabled = true;

  				lightClouds3.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds4.GetComponent.<Renderer>().enabled = false;
 
  				lightClouds5.GetComponent.<Renderer>().enabled = false;
  				
  				highClouds1.GetComponent.<Renderer>().enabled = true;
  				
  				highClouds2.GetComponent.<Renderer>().enabled = false;
  				
  				mostlyCloudyClouds.GetComponent.<Renderer>().enabled = false;
  			}

  			
  			//Fade out our butterflies
  			butterflies.GetComponent.<ParticleEmitter>().minEmission = butterfliesFade;
  			butterflies.GetComponent.<ParticleEmitter>().maxEmission = butterfliesFade;
  			
  			if (windyLeavesFade >= 6)
  			{
  				windyLeavesFade = 6;
  			}
  			
  			//Handles our particles
			snow.emissionRate = minSnowIntensity;
			
			snowMistFog.emissionRate = minSnowFogIntensity;
			
			//Added 1.8.1 Shuriken Particles
			rain.emissionRate = minRainIntensity;
			
			rainMist.emissionRate = minHeavyRainMistIntensity;
			
			if (minHeavyRainMistIntensity <= 0)
			{
				minHeavyRainMistIntensity = 0;
			}
			
			mistFog.GetComponent.<ParticleEmitter>().minEmission = minFogIntensity;
			mistFog.GetComponent.<ParticleEmitter>().maxEmission = minFogIntensity;

			windyLeaves.emissionRate = windyLeavesFade;
			
			if (butterfliesFade <= 0)
  			{
  				butterfliesFade = 0;
  			}
			
  			
  			//Fades our fog
			fogScript = cameraThing.GetComponent.<Camera>().GetComponent(GlobalFog);
			//rainOnCamera = cameraThing.camera.GetComponent(ImageRefractionEffect);
   			fogScript.globalDensity -= .0005 * Time.deltaTime;
   			fogScript.startDistance += 5 * Time.deltaTime;
   			
   			if (dynamicSnowFade <= .25)
			{
				dynamicSnowFade = .25;
			}
			
			if (dynamicSnowEnabled == true)
  			{
  			//snowScript = snowObject.GetComponent (CustomTerrainScriptAtsV3Snow);
   			//snowScript.SnowAmount = dynamicSnowFade;
   			}
   			
   			
   			if (fogScript.globalDensity <= 0)
   			{
   				fogScript.globalDensity = 0;
   			}
   			
   			if (fogScript.startDistance >= 300)
   			{
   				fogScript.startDistance = 300;
   			}
   		
   			//Keep snow from going below 0
  			if (minSnowIntensity <= 0)
  			{
  				minSnowIntensity = 0;
  			}
  			
  			//Keep snow fog from going below 0
  			if (minSnowFogIntensity <= 0)
  			{
  				minSnowFogIntensity = 0;
  			}			
  			
  			rainSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .07;
  			windSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
  			windSnowSound.GetComponent.<AudioSource>().volume -= Time.deltaTime * .04;
 						
  			//Deactivates UniStorm		
  			//GetComponent(UniStormThunder_JS).enabled = false;
  			
  			if (stormClouds <= 0)
  			{
  				stormClouds = 0;
  			}
  			
  			if (minRainIntensity >= 1)
  			{
  				//rainOnCamera.enabled = false;
  			}
  			
  			//Calculates our wind making it lessen		
  			if (minRainIntensity <= 0)
  				{
  					minRainIntensity = 0;
  					//Keeps our wind at 0 if there hasn't been a storm
					windZone.transform.rotation = Quaternion.AngleAxis(0, Vector3.up);

					windZone.gameObject.SetActive(false);
				
					if (windZone.transform.eulerAngles.y <= 1)
					{
						windZone.transform.eulerAngles.y = 0;

						windZone.gameObject.SetActive(false);
			   		 }
				
  				}
  				
  			if (minRainIntensity >= 1)
				{
				//Makes our wind weaker for when the storm ends
				 windZone.transform.Rotate(-Vector3.up * Time.deltaTime * 12);
				 
			
					if (windZone.transform.eulerAngles.y <= 1)
					{
					windZone.transform.eulerAngles.y = 0;
					}
			
				}
	
	
  			//Keeps our fade numbers from going below 0
  		    if (minFogIntensity <= 0)
  			{
  				minFogIntensity = 0;
  			}
  			
  			
  			 if (fade <= 0)
  				{
  				fade = 0;
  				
  				}
  				
  				
  			if (fadeStormClouds <= 0)
  				{
  					fadeStormClouds = 0;
  				}
  				
  			 if (time <= 0)
  				{
  					time = 0;
  				}
  				
  			sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  			sunShaftScript.sunShaftIntensity += .005;
  				
  				if (sunShaftScript.sunShaftIntensity >= 2)
  				{
  					sunShaftScript = cameraThing.GetComponent.<Camera>().GetComponent (SunShafts);
  					sunShaftScript.sunShaftIntensity = 2;
  					sun.enabled = true;
					//sunCloudy.enabled = false;
					RenderSettings.fogDensity += .00012 * Time.deltaTime;
   			
   			//ControlUnityFog
   			//If you wish to have denser fog you can increase the numbers below, you will have to do this for each day without percipitation
   			if (RenderSettings.fogDensity >= fogDensity)
   			{
   				RenderSettings.fogDensity = fogDensity;
   			}
  				}
  				
  		    //If the game speed is fast fade clouds instantly	
  			if (dayLength >= 0 && dayLength <=15) 
  			 	{
  					fade = 0;
  				}
  			}
  		}
  	
  }
  
function OnGUI () {
	
	if (timeScrollBar == true)
	{
		//Allows a scrolling GUI bar that controls the time of day by the user
		startTime = GUI.HorizontalSlider( Rect(20,20,200,30), startTime, 0,0.99);
		
		//moon.light.intensity = GUI.HorizontalSlider( Rect(20,125,200,30), moon.intensity, 0,1.0);
	}
	 
	   if (commandPromptActive == true)
	    {
			stringToEdit = GUI.TextField (Rect (20, 60, 40, 20), stringToEdit, 10);
			
			if(GUI.Button(Rect(20, 80, 60, 40), "Change"))
			{
            	weatherCommandPrompt ();
			}
		}
	
}


function FixedUpdate ()
{
	if (weatherCommandPromptUseable == true)
	{
		//weatherCommandPrompt ();
	}
}


function weatherCommandPrompt ()
{
	//Calculates our weather command prompts
	if (stringToEdit == foggy)
	{
		weatherForecaster = 1;
		print ("Weather Forced: Foggy");
	}
	
	if (stringToEdit == lightRain_lightSnow)
	{
		weatherForecaster = 2;
		print ("Weather Forced: Light Rain/Light Snow (Winter Only)");
	}
	
	if (stringToEdit == rainStorm_snowStorm)
	{
		weatherForecaster = 3;
		print ("Weather Forced: Tunder Storm/Snow Storm (Winter Only)");
	}
	
	if (stringToEdit == partlyCloudy1)
	{
		weatherForecaster = 4;
		print ("Weather Forced: Partly Cloudy 1");
	}
	
	if (stringToEdit == partlyCloudy2)
	{
		weatherForecaster = 5;
		print ("Weather Forced: Partly Cloudy 2");
	}
	
	if (stringToEdit == partlyCloudy3)
	{
		weatherForecaster = 6;
		print ("Weather Forced: Partly Cloudy 3");
	}
	
	if (stringToEdit == clear1)
	{
		weatherForecaster = 7;
		print ("Weather Forced: Clear 1");
	}
	
	if (stringToEdit == clear2)
	{
		weatherForecaster = 8;
		print ("Weather Forced: Clear 2");
	}
	
	if (stringToEdit == cloudy)
	{
		weatherForecaster = 9;
		print ("Weather Forced: Cloudy");
	}
	
	if (stringToEdit == butterfliesSummer)
	{
		weatherForecaster = 10;
		print ("Weather Forced: Butterflies (Summer Only)");
	}
	
	if (stringToEdit == mostlyCloudy)
	{
		weatherForecaster = 11;
		print ("Weather Forced: Mostly Cloudy");
	}
		
	if (stringToEdit == heavyRain)
	{
		weatherForecaster = 12;
		print ("Weather Forced: Heavy Rain (No Thunder)");
	}
	
	if (stringToEdit == fallLeaves)
	{
		weatherForecaster = 13;
		print ("Weather Forced: Falling Fall Leaves (Fall Only)");
	}
	//else
	//print ("Incorrect ID, please refer UniStorm documentation for ID's");
	
}	

function Lightning () {
	
	if (gradientSphere.activeSelf == false)
	{
	
	timer += Time.deltaTime;
	
	if (timer >= lightningOdds && lightingGenerated == false)
	{
		lightingGenerated = true;
		lightSource.GetComponent.<Light>().enabled = true;
		//audio.PlayOneShot(lightningSound[Random.Range(0,lightningSound.Length)]);
		
		lightningNumber = Random.Range(1,5);
		
		if (lightningNumber == 1)
		{
			GetComponent.<AudioSource>().PlayOneShot(thunderSound1);
		}
		
		if (lightningNumber == 2)
		{
			GetComponent.<AudioSource>().PlayOneShot(thunderSound2);
		}
		
		if (lightningNumber == 3)
		{
			GetComponent.<AudioSource>().PlayOneShot(thunderSound3);
		}
		
		if (lightningNumber == 4)
		{
			GetComponent.<AudioSource>().PlayOneShot(thunderSound4);
		}
		
		if (lightningNumber == 5)
		{
			GetComponent.<AudioSource>().PlayOneShot(thunderSound5);
		}
		
		//lightningSpawn.position = Random.insideUnitSphere * 15;
		Instantiate(lightningBolt1, lightningSpawn.position, lightningSpawn.rotation);
	}
	
	if (lightingGenerated == true)
	{
	  if (fadeLightning == false)
	  {
			lightSource.GetComponent.<Light>().intensity += .22;
	  }
		
		if (lightSource.GetComponent.<Light>().intensity >= lightningIntensity && fadeLightning == false)
		{
			lightSource.GetComponent.<Light>().intensity = lightningIntensity;
			fadeLightning = true;
		}
	}
	
	if (fadeLightning == true)
		{
		
		 onTimer += Time.deltaTime;
		  
		  if (onTimer >= lightningFlashLength)
		  {
		 	 lightSource.GetComponent.<Light>().intensity -= .14;
		  }
		  
		
			if (lightSource.GetComponent.<Light>().intensity <= 0)
			{
				lightSource.GetComponent.<Light>().intensity = 0;
				fadeLightning = false;
				lightingGenerated = false;
				timer = 0;
				onTimer = 0;
				lightSource.GetComponent.<Light>().enabled = false;
				
				lightningOdds = Random.Range(lightningMinChance, lightningMaxChance);
				lightningIntensity = Random.Range(minIntensity, maxIntensity);
			}
		}
	}

}

function LogErrorCheck () 
{
	//Check Null and Log Errors for weather effects
	if (rain == null)
		{
			//Error Log if object is not found unable to find UniStorm Editor
			Debug.LogError("<color=red>Rain System Null Reference:</color> There is no Rain Particle System, make sure there is one assigned to the Rain Particle System slot of the UniStorm Editor. ");
		}
		
	if (snow == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Snow System Null Reference:</color> There is no Snow Particle System, make sure there is one assigned to the Snow Particle System slot of the UniStorm Editor. ");
		}
	
	if (butterflies == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Butterflies System Null Reference:</color> There is no Butterflies Particle System, make sure there is one assigned to the Butterflies Particle System slot of the UniStorm Editor. ");
		}
	
	/*		
	if (butterflies == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Butterflies System Null Reference:</color> There is no Butterflies Particle System, make sure there is one assigned to the Butterflies Particle System slot of the UniStorm Editor. ");
		}
	*/
	
	if (mistFog == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Mist System Null Reference:</color> There is no Mist Particle System, make sure there is one assigned to the Mist Particle System slot of the UniStorm Editor. ");
		}
		
	if (snowMistFog == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Snow Dust System Null Reference:</color> There is no Snow Dust Particle System, make sure there is one assigned to the Snow Dust Particle System slot of the UniStorm Editor. ");
		}
		
	if (windyLeaves == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Windy Leaves System Null Reference:</color> There is no Windy Leaves Particle System, make sure there is one assigned to the Windy Leaves Particle System slot of the UniStorm Editor. ");
		}
		
	if (windZone == null)
		{
			//Error Log if script is unable to find UniStorm Editor
			Debug.LogError("<color=red>Wind Zone Null Reference:</color> There is no Wind Zone System, make sure there is one assigned to the Wind Zone System slot of the UniStorm Editor. ");
		}
		
	//Check Null and Log Errors for the SkyBox Mateirals that UniStorm uses	
	if (SkyBoxMaterial1 == null || SkyBoxMaterial2 == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Sky Box Material Null Reference:</color> There is a missing Sky Box Material, make sure there is one assigned to each of the Sky Box Material slots of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the Moon Phase Material that UniStorm uses	
	if (moonPhase1 == null || moonPhase2 == null || moonPhase3 == null || moonPhase4 == null || moonPhase5 == null || moonPhase6 == null || moonPhase7 == null || moonPhase8 == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Moon Phase Material Null Reference:</color> There is a missing Moon Phase Material, make sure there is one assigned to each of the Moon Phase Material slots of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the Cloud GameObjects that UniStorm uses
	if (lightClouds1 == null || lightClouds2 == null || lightClouds3 == null || lightClouds4 == null || lightClouds5 == null || heavyClouds == null || heavyCloudsLayer1 == null || heavyCloudsLayerLight == null || mostlyCloudyClouds == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Cloud GameObject Null Reference:</color> There is a missing Cloud GameObject, make sure there is one assigned to each of the Cloud GameObject slots of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the Sky Sphere GameObjects that UniStorm uses	
	if (starSphere == null || gradientSphere == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Sky Sphere GameObject Null Reference:</color> There is a missing Sky Sphere GameObject, make sure there is one assigned to both the Star Sphere and Gradient Sphere slots of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the Cloud GameObjects that UniStorm uses
	if (moonObject == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Moon GameObject Null Reference:</color> The Moon GameObject is missing, make sure there it is assigned to the Moon GameObject slot of the UniStorm Editor. ");
	}
	
	/*
	//Check Null and Log Errors for the Cloud GameObjects that UniStorm uses
	if (horizonObject == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Moon GameObject Null Reference:</color> The Horizon GameObject is missing, make sure it is assigned to the Horizon GameObject slot of the UniStorm Editor. ");
	}
	*/
	
	//Check Null and Log Errors for the Sun GameObjects that UniStorm uses
	if (sun == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Sun GameObject Null Reference:</color> The Sun GameObject is missing, make sure it is assigned to the Sun GameObject slot of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the Moon GameObjects that UniStorm uses
	if (moon == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Moon GameObject Null Reference:</color> The Moon GameObject is missing, make sure it is assigned to the Moon GameObject slot of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the lightning GameObjects that UniStorm uses
	if (lightSource == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Lightning Light GameObject Null Reference:</color> The Lightning Light GameObject is missing, make sure it is assigned to the Lightning Light GameObject slot of the UniStorm Editor. ");
	}
	
	//Check Null and Log Errors for the Weather Sound GameObjects that UniStorm uses
	if (rainSound == null || windSound == null || windSnowSound == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Weather Sound Effect Null Reference:</color>  There is a missing Weather Sound Effect, make sure there is one assigned to each of the Weather Sound Effect slots of the UniStorm Editor.");
	}
	
	//Check Null and Log Errors for the thunder Sound GameObjects that UniStorm uses
	if (thunderSound1 == null || thunderSound2 == null || thunderSound3 == null || thunderSound4 == null || thunderSound5 == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Weather Sound Effect Null Reference:</color>  There is a missing Thunder Sound Effect, make sure there is one assigned to each of the Thunder Sound Effect slots of the UniStorm Editor.");
	}
	
	if (lightningBolt1 == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Lightning Bolt Null Reference:</color> The Lightning Bolt is missing, make sure there is one attached to the UniStorm UniStorm Editor.");
	}
	
	if (lightningSpawn == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		Debug.LogError("<color=red>Lightning Bolt Spawn Null Reference:</color> The Lightning Bolt Spawn is missing, make sure there is one attached to the UniStorm UniStorm Editor.");
	}
	
	if (sunShaftScript == null)
	{
	    //Error Log if script is unable to find UniStorm Editor
		//Debug.LogError("<color=red>Sun Shafts Null Reference:</color> The Sun Shafts Image Effect is missing, make sure there is one attached to the camera that is using UniStorm (Even if you are using Unity Free).");
	}
	
	if (fogScript == null)
	{
		//Error Log if script is unable to find UniStorm Editor
		//Debug.LogError("<color=red>Global Fog Null Reference:</color> The Global Fog Image Effect is missing, make sure there is one attached to the camera that is using UniStorm (Even if you are using Unity Free).");
	}
}

//Added 1.7.5
function LateUpdate()
{
	if (cloudType == 1)
	{
		uvOffsetA += (uvAnimationRateA * Time.deltaTime * cloudSpeed * 0.1f);
		uvOffsetB += (uvAnimationRateB * Time.deltaTime * cloudSpeed * 0.1f);
		uvOffsetC += (uvAnimationRateB * Time.deltaTime * cloudSpeed * 0.1f);

        lightClouds1.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudA, uvOffsetA );
		lightClouds1.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudB, uvOffsetB );
		lightClouds1.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudC, uvOffsetC );
		partlyCloudyClouds1.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudA, uvOffsetA );
		
		if (cloudDensity == 2)
		{
			lightClouds1a.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudA, uvOffsetA );
			lightClouds1a.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudB, uvOffsetB );
			lightClouds1a.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudC, uvOffsetC );
			partlyCloudyClouds2.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudA, uvOffsetA );
		}

		uvOffsetHeavyA += (uvAnimationRateHeavyA * Time.deltaTime * heavyCloudSpeed * 0.1f);
		uvOffsetHeavyB += (uvAnimationRateHeavyB * Time.deltaTime * heavyCloudSpeed * 0.1f);
		uvOffsetHeavyC += (uvAnimationRateHeavyB * Time.deltaTime * heavyCloudSpeed * 0.1f);

        heavyCloudsLayerLight.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudA, uvOffsetHeavyA );
		heavyCloudsLayerLight.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudB, uvOffsetHeavyB );
		heavyCloudsLayerLight.GetComponent.<Renderer>().materials[ materialIndex ].SetTextureOffset( CloudC, uvOffsetHeavyC );
	}

}

function DynamicTimeOfDaySounds () {
	
	TODSoundsTimer += Time.deltaTime;
	
	//1.7.5
	if (TODSoundsTimer >= timeToWaitCurrent && Hour > 4 && Hour < 8 && playedSound == false && useMorningSounds)
	{
		GetComponent.<AudioSource>().PlayOneShot(ambientSoundsMorning[Random.Range(0,ambientSoundsMorning.Count)]);
		playedSound = true;
		//Debug.Log("Morning Sound Played");
	}
	
	if (TODSoundsTimer > timeToWaitCurrent && Hour > 8 && Hour < 16 && playedSound == false && useDaySounds)
	{
		GetComponent.<AudioSource>().PlayOneShot(ambientSoundsDay[Random.Range(0,ambientSoundsDay.Count)]);
		playedSound = true;
		//Debug.Log("Day Sound Played");
	}
	
	if (TODSoundsTimer > timeToWaitCurrent && Hour > 16 && Hour < 20 && playedSound == false && useEveningSounds)
	{
		GetComponent.<AudioSource>().PlayOneShot(ambientSoundsEvening[Random.Range(0,ambientSoundsEvening.Count)]);
		playedSound = true;
		//Debug.Log("Evening Sound Played");
	}
	
	if (TODSoundsTimer > timeToWaitCurrent && Hour > 20 && Hour < 25 && playedSound == false && useNightSounds)
	{	
		GetComponent.<AudioSource>().PlayOneShot(ambientSoundsNight[Random.Range(0,ambientSoundsNight.Count)]);
		playedSound = true;
		//Debug.Log("Night Sound Played");
	}
		
	if (TODSoundsTimer > timeToWaitCurrent && Hour > 0 && Hour < 4 && playedSound == false && useNightSounds)
	{	
		GetComponent.<AudioSource>().PlayOneShot(ambientSoundsNight[Random.Range(0,ambientSoundsNight.Count)]);
		playedSound = true;
		//Debug.Log("Night Sound Played");
	}
	
	if (TODSoundsTimer >= timeToWaitCurrent+2)
	{
		timeToWaitCurrent = Random.Range(timeToWaitMin,timeToWaitMax);
		TODSoundsTimer = 0;
		playedSound = false;
	}
	

}

  		
  		
  		 
