//UniStorm Weather System Editor C# Version 1.8.3 @ Copyright
//Black Horizon Studios

using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;

[CustomEditor(typeof(UniStormWeatherSystem_C))] 
public class UniStormEditor_C : Editor 
{
	
	enum StartTimeDropDown
	{
		Morning = 1,
		Day = 2,
		Evening = 3,
		Night = 4
	}
	
	//Spring Weather Odds
	enum WeatherChanceDropDown1
	{
		_20 = 20, 
		_40 = 40, 
		_60 = 60, 
		_80 = 80
	}
	
	//Summer Weather Odds
	enum WeatherChanceDropDown2
	{
		_20 = 20, 
		_40 = 40, 
		_60 = 60, 
		_80 = 80
	}
	
	//Fall Weather Odds
	enum WeatherChanceDropDown3
	{
		_20 = 20, 
		_40 = 40, 
		_60 = 60, 
		_80 = 80
	}
	
	//Winter Weather Odds
	enum WeatherChanceDropDown4
	{
		_20 = 20, 
		_40 = 40, 
		_60 = 60, 
		_80 = 80
	}
	
	enum MonthDropDown
	{
		January = 1,
		February = 2,
		March = 3,
		April = 4,
		May = 5,
		June = 6,
		July = 7,
		August = 8,
		September = 9,
		October = 10,
		November = 11,
		December = 12
	}
	
	enum WeatherTypeDropDown
	{
		Foggy = 1, 
		LightRainOrLightSnowWinterOnly = 2, 
		ThunderStormOrSnowStormWinterOnly = 3, 
		PartlyCloud1 = 4, 
		PartlyCloud2 = 5, 
		PartlyCloud3 = 6, 
		Clear1 = 7,
		Clear2 = 8, 
		Cloudy = 9, 
		ButterfliesSummerOnly = 10,
		MostlyCloudy = 11, 
		HeavyRainNoThunder = 12,  
		FallingLeavesFallOnly = 13
	}
	
	enum MoonPhaseDropDown
	{
		NewMoon = 1,
		WaxingCresent = 2,
		FirstQuarter = 3,
		WaxingGibbous = 4,
		FullMoon = 5,
		WaningGibbous = 6,
		ThirdQuater = 7,
		WaningCresent = 8
	}
	
	enum FogModeDropDown
	{
		linear = 1,
		exponential = 2,
		exp2 = 3
	}
	
	enum CloudDensityDropDown
	{
		low = 1,
		high = 2
	}
	
	enum DayShadowTypeDropDown
	{
		Hard = 1,
		Soft = 2
	}
	
	enum NightShadowTypeDropDown
	{
		Hard = 1,
		Soft = 2
	}
	
	enum LightningShadowTypeDropDown
	{
		Hard = 1,
		Soft = 2
	}
	
	enum CloudTypeDropDown
	{
		Dynamic = 1,
		NonDynamic = 2
	}
	
	enum TemperatureDropDown
	{
		Fahrenheit = 1,
		Celsius = 2
	}

	enum CalendarDropDown
	{
		Standard = 1,
		Custom = 2
	}
	
	
	bool showAdvancedOptions = true;
	bool showHelpOptions = true;
	
	StartTimeDropDown editorStartTime = StartTimeDropDown.Day;
	WeatherTypeDropDown editorWeatherType = WeatherTypeDropDown.PartlyCloud1;
	MonthDropDown editorMonth = MonthDropDown.January;
	MoonPhaseDropDown editorMoonPhase = MoonPhaseDropDown.FullMoon;
	WeatherChanceDropDown1 editorWeatherChance1 = WeatherChanceDropDown1._40;
	WeatherChanceDropDown2 editorWeatherChance2 = WeatherChanceDropDown2._40;
	WeatherChanceDropDown3 editorWeatherChance3 = WeatherChanceDropDown3._40;
	WeatherChanceDropDown4 editorWeatherChance4 = WeatherChanceDropDown4._40;
	
	FogModeDropDown editorFogMode = FogModeDropDown.linear;
	CloudDensityDropDown editorCloudDensity = CloudDensityDropDown.high;
	DayShadowTypeDropDown editorDayShadowType = DayShadowTypeDropDown.Hard;
	NightShadowTypeDropDown editorNightShadowType = NightShadowTypeDropDown.Hard;
	LightningShadowTypeDropDown editorLightningShadowType = LightningShadowTypeDropDown.Hard;
	CloudTypeDropDown editorCloudType = CloudTypeDropDown.Dynamic;
	TemperatureDropDown editorTemperature = TemperatureDropDown.Fahrenheit;
	CalendarDropDown editorCalendarType = CalendarDropDown.Standard;
	
	public override void OnInspectorGUI () {
		
		UniStormWeatherSystem_C self = (UniStormWeatherSystem_C)target;
		float thirdOfScreen = Screen.width/3-10;
		int sizeOfHideButtons = 18;
		
		//Time Number Variables
		EditorGUILayout.LabelField("UniStorm Weather System", EditorStyles.boldLabel);
		EditorGUILayout.LabelField("By: Black Horizon Studios", EditorStyles.label);
		EditorGUILayout.Space();
		
		//self.weatherOdds = EditorGUILayout.IntField ("Weather Odds", self.weatherOdds);
		//self.moonFade = EditorGUILayout.FloatField ("Moon Fade", self.moonFade);
		
		//self.fader = EditorGUILayout.FloatField ("Fader 1", self.fader);
		//self.fader2 = EditorGUILayout.FloatField ("Fader 2", self.fader2);
		//self.minRainIntensity = EditorGUILayout.FloatField ("Min Rain Intensity", self.minRainIntensity);
		
		
		EditorGUILayout.LabelField("Editor Options", EditorStyles.boldLabel);
		string showOrHide2 = "Show";
		if(showHelpOptions)
			showOrHide2 = "Hide";
		if(GUILayout.Button(showOrHide2+ " Help Boxes", GUILayout.Width(thirdOfScreen*2), GUILayout.Height(sizeOfHideButtons)) )
		{
			showHelpOptions = !showHelpOptions;
		}
		
		string showOrHide = "Show";
		if(showAdvancedOptions)
			showOrHide = "Hide";
		if(GUILayout.Button(showOrHide+ " Object Fields", GUILayout.Width(thirdOfScreen*2), GUILayout.Height(sizeOfHideButtons)) )
		{
			showAdvancedOptions = !showAdvancedOptions;
		}
		
		EditorGUILayout.LabelField("Time Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The current UniStorm time is displayed with these variables. Setting the Starting Time will start UniStorm at that specific time of day. Time variables can be used to create events, quests, and effects at specific times.", MessageType.None, true);
		}
		
		editorStartTime = (StartTimeDropDown)self.startTimeNumber;
		editorStartTime = (StartTimeDropDown)EditorGUILayout.EnumPopup("Starting Time of Day", editorStartTime);
		self.startTimeNumber = (int)editorStartTime;
		
		self.minuteCounter = EditorGUILayout.IntField ("Minutes", self.minuteCounter);
		//self.minuteCounter = (int)self.minuteCounter;
		
		self.hourCounter = EditorGUILayout.IntField ("Hours", self.hourCounter);
		//self.hourCounter = (int)self.hourCounter;
		
		self.dayCounter = EditorGUILayout.FloatField ("Days", self.dayCounter);
		
		if (self.calendarType == 1)
		{	
			editorMonth = (MonthDropDown)self.monthCounter;
			editorMonth = (MonthDropDown)EditorGUILayout.EnumPopup("Month", editorMonth);
			self.monthCounter = (int)editorMonth;
		}

		if (self.calendarType == 2)
		{
			EditorGUILayout.Space();	
			EditorGUILayout.HelpBox("While Custom Calendar is enabled, UniStorm will display numbers for months.", MessageType.Warning, true);
			
			self.monthCounter = EditorGUILayout.FloatField ("Months", self.monthCounter);
			
			EditorGUILayout.Space();
		}
		
		self.yearCounter = EditorGUILayout.FloatField ("Years", self.yearCounter);
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Day Length is calculated by how many real-time minutes are in 1 UniStorm day. A value of 60 would give you 1 hour long days. This can be changed to any value that's desired.", MessageType.None, true);
		}
		
		self.dayLength = EditorGUILayout.FloatField ("Day Length", self.dayLength); 


		EditorGUILayout.Space();
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Calendar Options", EditorStyles.boldLabel);
		
		editorCalendarType = (CalendarDropDown)self.calendarType;
		editorCalendarType = (CalendarDropDown)EditorGUILayout.EnumPopup("Calendar Type", editorCalendarType);
		self.calendarType = (int)editorCalendarType;
		
		if (self.calendarType == 1)
		{
			if (showHelpOptions == true)
			{	
				EditorGUILayout.Space();
				
				EditorGUILayout.HelpBox("While the Calendar Type is set to Standard, UniStorm will have standard calendar calculations. This includes the automatic calculation of Leap Year.", MessageType.None, true);
			}
		}
		
		if (self.calendarType == 2)
		{	
			EditorGUILayout.Space();
			
			self.numberOfDaysInMonth = EditorGUILayout.IntField ("Days In Month", self.numberOfDaysInMonth);
			self.numberOfMonthsInYear = EditorGUILayout.IntField ("Months In Year", self.numberOfMonthsInYear);
			
			if (showHelpOptions == true)
			{	
				EditorGUILayout.Space();
				
				EditorGUILayout.HelpBox("While the Calendar Type is set to Custom, UniStorm will choose the values you set within the Editor to calculate Days, Months, and Years. The Month will be changed and listed as a number value.", MessageType.None, true);
			}
		}


		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Sky Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Sky Options allow you to control weather and the speed of sky related components. The Weather Type allows you to manually change UniStorm's weather to any weather that's listed in the drop down menu. This can be used for starting weather or be changed while testing out your scene. The Cloud Thickness controls how thick the dynamic clouds will render.", MessageType.None, true);
		}
		
		EditorGUILayout.Space();
		
		if (self.cloudType == 1)
		{
			editorCloudDensity = (CloudDensityDropDown)self.cloudDensity;
			editorCloudDensity = (CloudDensityDropDown)EditorGUILayout.EnumPopup("Cloud Thickness", editorCloudDensity);
			self.cloudDensity = (int)editorCloudDensity; 
		}

		EditorGUILayout.Space();

		if (self.cloudDensity == 1)
		{
			EditorGUILayout.HelpBox("Low Cloud Thickness will render less dense clouds. This option is for people who like the look of lighter and more faint looking clouds.", MessageType.Info, true);
		}
		
		if (self.cloudDensity == 2)
		{
			EditorGUILayout.HelpBox("High Cloud Thickness will render clouds more dense. This option is for people who like the look of thick noticable clouds.", MessageType.Info, true);
		}

		
		EditorGUILayout.Space();
		
		editorCloudType = (CloudTypeDropDown)self.cloudType;
		editorCloudType = (CloudTypeDropDown)EditorGUILayout.EnumPopup("Cloud Type", editorCloudType);
		self.cloudType = (int)editorCloudType; 
		
		EditorGUILayout.Space();
		
		if (self.cloudType == 1)
		{
			EditorGUILayout.HelpBox("While using Dynamic Cloud UniStorm's clouds will form dynamically. This allows no two clouds in the sky to look the same. Dynamic clouds also look more relalistic and have much more diveristy. This options also affects UniStorm's Storm Clouds.", MessageType.Info, true);
		}
		
		if (self.cloudType == 2)
		{
			EditorGUILayout.HelpBox("While using Non Dynamic clouds, UniStorm will revert back to version 1.6 clouds. Some features may also be disabled both in the UniStorm Editor and visually (Such as clouds being masked along the horizon). These clouds have more of a 'Skyrim' look compared to Dynamic Clouds. These clouds still animate. This option is availble for those who prefer this look over the Dynamic Clouds. ", MessageType.Info, true);
		}
		
		//self.cloudSpeed = EditorGUILayout.IntField ("Cloud Speed", self.cloudSpeed);
		self.cloudSpeed = EditorGUILayout.IntSlider ("Cloud Speed", self.cloudSpeed, 0, 50);
		//self.cloudSpeed = (int)self.cloudSpeed;
		
		//self.heavyCloudSpeed = EditorGUILayout.IntField ("Storm Cloud Speed", self.heavyCloudSpeed);
		self.heavyCloudSpeed = EditorGUILayout.IntSlider ("Storm Cloud Speed", self.heavyCloudSpeed, 0, 50);
		//self.heavyCloudSpeed = (int)self.heavyCloudSpeed;

		EditorGUILayout.Space();
		
		self.starSpeed = EditorGUILayout.IntField ("Star Scroll Speed", self.starSpeed);
		//self.starSpeed = (int)self.starSpeed;
		
		self.starRotationSpeed = EditorGUILayout.IntField ("Star Rotation Speed", self.starRotationSpeed);
		//self.starRotationSpeed = (int)self.starRotationSpeed;

		EditorGUILayout.Space();
		
		editorWeatherType = (WeatherTypeDropDown)self.weatherForecaster;
		editorWeatherType = (WeatherTypeDropDown)EditorGUILayout.EnumPopup("Weather Type", editorWeatherType);
		self.weatherForecaster = (int)editorWeatherType;


		EditorGUILayout.Space();		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Atmosphere Options", EditorStyles.boldLabel);			
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("UniStorm now uses a Physically Based Skybox shader. This shader allows you to adjust factors of the atmosphere that affect the color of the sky which changes according to the angle of the Sun.", MessageType.None, true);
		}
		
		self.skyTintColor = EditorGUILayout.ColorField("Sky Tint Color", self.skyTintColor);
		
		EditorGUILayout.Space();
		
		self.groundColor = EditorGUILayout.ColorField("Ground Color", self.groundColor);

		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("Here you can adjust the Skybox Tint and Ground colors. The procedural skybox shader will accurately shade according to the time of day and angle of the sun.", MessageType.Info, true);
		}

		EditorGUILayout.Space();
		EditorGUILayout.Space();
		
		self.atmosphereThickness = EditorGUILayout.Slider ("Atmosphere Thickness", self.atmosphereThickness, 0.0f, 5.0f);
		
		EditorGUILayout.Space();
		
		self.exposure = EditorGUILayout.Slider ("Exposure", self.exposure, 0.0f, 8.0f);

		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("Here you can adjust the Atmosphere Thickness and Exposure. These values allow you to control how thick the atosphere is and how much light is scattered.", MessageType.Info, true);
		}

		EditorGUILayout.Space();
		EditorGUILayout.Space();


		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Fog Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Fog Options allow you to control all densities of Unity's fog. Unity has 3 fog modes; Linear, Exponential, and Exp2. UniStorm will adjust the options according to the fog mode you've selected. Auto Enable Fog will enable Unity's Fog automatically if the check box is checked.", MessageType.None, true);
		}
		
		EditorGUILayout.Space();
		
		self.useUnityFog = EditorGUILayout.Toggle ("Auto Enable Fog?",self.useUnityFog);
		
		EditorGUILayout.Space();
		
		editorFogMode = (FogModeDropDown)self.fogMode;
		editorFogMode = (FogModeDropDown)EditorGUILayout.EnumPopup("Fog Mode", editorFogMode);
		self.fogMode = (int)editorFogMode; 
		
		EditorGUILayout.Space();
		
		if (self.fogMode == 1)
		{
			self.stormyFogDistanceStart = EditorGUILayout.IntSlider ("Stormy Fog Start Distance", self.stormyFogDistanceStart, -400, 1000);
			self.stormyFogDistance = EditorGUILayout.IntSlider ("Stormy Fog End Distance", self.stormyFogDistance, 200, 2500);
			self.fogStartDistance = EditorGUILayout.IntSlider ("Regular Fog Start Distance", self.fogStartDistance, -400, 1000);
			self.fogEndDistance = EditorGUILayout.IntSlider ("Regular Fog End Distance", self.fogEndDistance, 200, 5000);
		}
		
		if (self.fogMode == 2 || self.fogMode == 3)
		{
			self.fogDensity = EditorGUILayout.FloatField ("Fog Density", self.fogDensity);
		}
		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Lightning Options", EditorStyles.boldLabel);
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("These settings allow you to adjust any lightning and thunder related options. These features will only happen during the Thunder Storm weather type.", MessageType.None, true);
		}
		
		self.shadowsLightning = EditorGUILayout.Toggle ("Shadows Enabled?",self.shadowsLightning);
		
		if (self.shadowsLightning)
		{
			EditorGUILayout.Space();
			
			editorLightningShadowType = (LightningShadowTypeDropDown)self.lightningShadowType;
			editorLightningShadowType = (LightningShadowTypeDropDown)EditorGUILayout.EnumPopup("Shadow Type", editorLightningShadowType);
			self.lightningShadowType = (int)editorLightningShadowType;
			
			EditorGUILayout.Space();
			
			self.lightningShadowIntensity = EditorGUILayout.Slider ("Shadow Intensity", self.lightningShadowIntensity, 0, 1.0f);
			
			EditorGUILayout.Space();
		}
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The lighting intesity settings control the possible minimum and maximum light intensity of the lightning.", MessageType.None, true);
		}
		
		self.lightningColor = EditorGUILayout.ColorField("Lightning Color", self.lightningColor);
		
		EditorGUILayout.Space();
		
		self.minIntensity = EditorGUILayout.Slider ("Min Lightning Intensity", (float)self.minIntensity, 0.5f, 1.5f);
		self.maxIntensity = EditorGUILayout.Slider ("Max Lightning Intensity", self.maxIntensity, 0.5f, 1.5f);
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The minimum and maximum wait controls the seconds between each lightning strike.", MessageType.None, true);
		}
		
		self.lightningMinChance = EditorGUILayout.IntSlider ("Min Wait", (int)self.lightningMinChance, 1, 20);
		self.lightningMaxChance = EditorGUILayout.IntSlider ("Max Wait", (int)self.lightningMaxChance, 10, 40);
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The flash length controls how quickly the lightning flashes on and off.", MessageType.None, true);
		}
		
		self.lightningFlashLength = EditorGUILayout.Slider ("Lightning Flash Length", self.lightningFlashLength, 0.4f, 1.2f);
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("Here you can add custom thunder sounds if desired. UniStorm will play them randomly each lightning strike.", MessageType.None, true);
		}
		
		
		bool thunderSound1 = !EditorUtility.IsPersistent (self);
		self.thunderSound1 = (AudioClip)EditorGUILayout.ObjectField ("Thunder Sound 1", self.thunderSound1, typeof(AudioClip), thunderSound1);
		bool thunderSound2 = !EditorUtility.IsPersistent (self);
		self.thunderSound2 = (AudioClip)EditorGUILayout.ObjectField ("Thunder Sound 2", self.thunderSound2, typeof(AudioClip), thunderSound2);
		bool thunderSound3 = !EditorUtility.IsPersistent (self);
		self.thunderSound3 = (AudioClip)EditorGUILayout.ObjectField ("Thunder Sound 3", self.thunderSound3, typeof(AudioClip), thunderSound3);
		bool thunderSound4 = !EditorUtility.IsPersistent (self);
		self.thunderSound4 = (AudioClip)EditorGUILayout.ObjectField ("Thunder Sound 4", self.thunderSound4, typeof(AudioClip), thunderSound4);
		bool thunderSound5 = !EditorUtility.IsPersistent (self);
		self.thunderSound5 = (AudioClip)EditorGUILayout.ObjectField ("Thunder Sound 5", self.thunderSound5, typeof(AudioClip), thunderSound5);
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("This Game Object controls where the lightning strikes happen and should be attached to the position axis of (0,0,0) of your player. UniStorm will randomly spawn lightning strikes around your player.", MessageType.None, true);
		}
		
		bool lightningSpawn = !EditorUtility.IsPersistent (self);
		self.lightningSpawn = (Transform)EditorGUILayout.ObjectField ("Lightning Bolt Spawn", self.lightningSpawn, typeof(Transform), lightningSpawn);
		
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("You can add a custom lightning strike here if desired and UniStorm will spawn random strikes according to your player's position.", MessageType.None, true);
		}
		
		bool lightningBolt1 = !EditorUtility.IsPersistent (self);
		self.lightningBolt1 = (GameObject)EditorGUILayout.ObjectField ("Lightning Bolt", self.lightningBolt1, typeof(GameObject), lightningBolt1);
		
		//self.moonPhaseCalculator = EditorGUILayout.IntField ("Moon Phase", self.moonPhaseCalculator);
		//self.weatherForecaster = EditorGUILayout.FloatField ("Weather Type", self.weatherForecaster);  
		
		//self.startTime = EditorGUILayout.FloatField ("Start Time", self.startTime);
		//self.moonPhaseChangeTime = EditorGUILayout.FloatField ("Moon Change Time", self.moonPhaseChangeTime);
		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Weather Odds Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Weather Odds control the weather odds for each season. A value of 20% gives a 20% chance that the weather will change where 80% would give you an 80% chance. UniStorm's advanced algorithm handles the rest and generates you dynamic weather according to your weather odds for each season.", MessageType.None, true);
		}
		
		editorWeatherChance1 = (WeatherChanceDropDown1)self.weatherChanceSpring;
		editorWeatherChance1 = (WeatherChanceDropDown1)EditorGUILayout.EnumPopup("Spring %", editorWeatherChance1);
		self.weatherChanceSpring = (int)editorWeatherChance1;
		
		editorWeatherChance2 = (WeatherChanceDropDown2)self.weatherChanceSummer;
		editorWeatherChance2 = (WeatherChanceDropDown2)EditorGUILayout.EnumPopup("Summer %", editorWeatherChance2);
		self.weatherChanceSummer = (int)editorWeatherChance2;
		
		editorWeatherChance3 = (WeatherChanceDropDown3)self.weatherChanceFall;
		editorWeatherChance3 = (WeatherChanceDropDown3)EditorGUILayout.EnumPopup("Fall %", editorWeatherChance3);
		self.weatherChanceFall = (int)editorWeatherChance3;
		
		editorWeatherChance4 = (WeatherChanceDropDown4)self.weatherChanceWinter;
		editorWeatherChance4 = (WeatherChanceDropDown4)EditorGUILayout.EnumPopup("Winter %", editorWeatherChance4);
		self.weatherChanceWinter = (int)editorWeatherChance4;
		
		//Temperature OPtions
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Temperature Options", EditorStyles.boldLabel); 
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("With the Temperature Options you can see the current temperature and adjust many temperature related settings.", MessageType.None, true);
		}
		
		EditorGUILayout.Space();
		
		editorTemperature = (TemperatureDropDown)self.temperatureType;
		editorTemperature = (TemperatureDropDown)EditorGUILayout.EnumPopup("Temperature Type", editorTemperature);
		self.temperatureType = (int)editorTemperature;
		
		if (self.temperatureType == 1)
		{
			self.temperature = EditorGUILayout.IntField ("Current Temperature", self.temperature);

			EditorGUILayout.HelpBox("While using the Fahrenheit temperature type, UniStorm will snow at a temperature of 32 degrees or below.", MessageType.Info, true);
		}
		
		if (self.temperatureType == 2)
		{
			self.temperature = EditorGUILayout.IntField ("Current Temperature", self.temperature);

			EditorGUILayout.HelpBox("While using the Celsuis temperature type, UniStorm will snow at a temperature of 0 degrees or below.", MessageType.Info, true);
		}
		
		//self.temperature = EditorGUILayout.IntField ("Current Temperature", self.temperature);
		
		//self.temperature = (int)self.temperature;
		EditorGUILayout.Space();
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("Here you can adjust the minimum and maximum temperature for each month. UniStorm will generate realistic temperature fluctuations according to your minimum and maximums. This is done both hourly and daily.", MessageType.None, true);
		}
		
		self.startingSpringTemp = EditorGUILayout.IntField ("Starting Spring Temp", self.startingSpringTemp);
		//self.startingSpringTemp = (int)self.startingSpringTemp;
		self.minSpringTemp = EditorGUILayout.IntField ("Min Spring", self.minSpringTemp);
		//self.minSpringTemp = (int)self.minSpringTemp;
		self.maxSpringTemp = EditorGUILayout.IntField ("Max Spring", self.maxSpringTemp);
		//self.maxSpringTemp = (int)self.maxSpringTemp;
		EditorGUILayout.Space();
		
		self.startingSummerTemp = EditorGUILayout.IntField ("Starting Summer Temp", self.startingSummerTemp);
		//self.startingSummerTemp = (int)self.startingSummerTemp;
		self.minSummerTemp = EditorGUILayout.IntField ("Min Summer", self.minSummerTemp);
		//self.minSummerTemp = (int)self.minSummerTemp;
		self.maxSummerTemp = EditorGUILayout.IntField ("Max Summer", self.maxSummerTemp);
		//self.maxSummerTemp = (int)self.maxSummerTemp;
		EditorGUILayout.Space();
		
		self.startingFallTemp = EditorGUILayout.IntField ("Starting Fall Temp", self.startingFallTemp);
		//self.startingFallTemp = (int)self.startingFallTemp;
		self.minFallTemp = EditorGUILayout.IntField ("Min Fall", self.minFallTemp);
		//self.minFallTemp = (int)self.minFallTemp;
		self.maxFallTemp = EditorGUILayout.IntField ("Max Fall", self.maxFallTemp);
		//self.maxFallTemp = (int)self.maxFallTemp;
		EditorGUILayout.Space();
		
		self.startingWinterTemp = EditorGUILayout.IntField ("Starting Winter Temp", self.startingWinterTemp);
		//self.startingWinterTemp = (int)self.startingWinterTemp;
		self.minWinterTemp = EditorGUILayout.IntField ("Min Winter", self.minWinterTemp);
		//self.minWinterTemp = (int)self.minWinterTemp;
		self.maxWinterTemp = EditorGUILayout.IntField ("Max Winter", self.maxWinterTemp);
		//self.maxWinterTemp = (int)self.maxWinterTemp;
		
		//Sun Intensity
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Sun Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("With the Sun Options you can control things like Sun Rotation, Sun Light and Sun Shadow Intensity, and whether or not you would like to enable or disable shadows for the Sun. Adjusting the Sun Rotation rotates the Sun's rising and setting posistions. You can rotate the Sun 360 degrees to perfectly suit your needs. The Sun Max Intensity is the max intesity the Sun will reach for the day. The Enable Shadows check box controls whether or not the Sun will use shadows.", MessageType.None, true);
		}
		
		EditorGUILayout.Space();

		/*

		self.useSunFlare = EditorGUILayout.Toggle ("Use Sun Flare?",self.useSunFlare);
		
		EditorGUILayout.Space();


		if (self.useSunFlare)
		{
			EditorGUILayout.HelpBox("While Use Sun Flare is selected, UniStorm will use Unity's light flares to render the sun.", MessageType.Info, true);
			EditorGUILayout.Space();
		}
		
		if (self.useSunFlare)
		{
			self.sunFlareColor = EditorGUILayout.ColorField("Sun Flare Color", self.sunFlareColor);
		}
		*/
		
		EditorGUILayout.Space();
		
		self.maxSunIntensity = EditorGUILayout.Slider ("Max Sun Intensity", self.maxSunIntensity, 0.5f, 4);
		
		EditorGUILayout.Space();
		
		self.sunSize = EditorGUILayout.Slider ("Sun Size", self.sunSize, 0, 0.05f);
		
		EditorGUILayout.Space();
		
		self.shadowsDuringDay = EditorGUILayout.Toggle ("Shadows Enabled?",self.shadowsDuringDay);
		
		if (self.shadowsDuringDay)
		{
			EditorGUILayout.Space();
			
			editorDayShadowType = (DayShadowTypeDropDown)self.dayShadowType;
			editorDayShadowType = (DayShadowTypeDropDown)EditorGUILayout.EnumPopup("Shadow Type", editorDayShadowType);
			self.dayShadowType = (int)editorDayShadowType;
			
			EditorGUILayout.Space();
			
			self.dayShadowIntensity = EditorGUILayout.Slider ("Shadow Intensity", self.dayShadowIntensity, 0, 1.0f);
		}

		EditorGUILayout.Space();
		
		self.sunAngle = EditorGUILayout.IntSlider ("Sun Rotation", (int)self.sunAngle, -180, 180);
		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Moon Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Moon Options allow you to choose the starting moon phase. There are a total of 8 moon phases that are updated each day. The moon phase will continue to cycle and starts with the moon phase you choose. You can change the materials of the moon pahases and UniStorm will cycle throught them accordingly.", MessageType.None, true);
		}

		EditorGUILayout.Space();
		
		self.moonLightIntensity = EditorGUILayout.Slider ("Moonlight Intensity", self.moonLightIntensity, 0, 0.5f);

		EditorGUILayout.Space();

		self.moonColor = EditorGUILayout.ColorField("Moon Color", self.moonColor);

		EditorGUILayout.Space();

		self.shadowsDuringNight = EditorGUILayout.Toggle ("Shadows Enabled?",self.shadowsDuringNight);
		
		if (self.shadowsDuringNight)
		{
			EditorGUILayout.Space();
			
			editorNightShadowType = (NightShadowTypeDropDown)self.nightShadowType;
			editorNightShadowType = (NightShadowTypeDropDown)EditorGUILayout.EnumPopup("Shadow Type", editorNightShadowType);
			self.nightShadowType = (int)editorNightShadowType;
			
			EditorGUILayout.Space();
			
			self.nightShadowIntensity = EditorGUILayout.Slider ("Shadow Intensity", self.nightShadowIntensity, 0, 1.0f);
		}
		
		EditorGUILayout.Space();
		
		self.customMoonSize = EditorGUILayout.Toggle ("Customize Moon Size?",self.customMoonSize);
		
		EditorGUILayout.Space();
		
		if (self.customMoonSize)
		{
			self.moonSize = EditorGUILayout.IntSlider ("Moon Size", self.moonSize, 1, 15);
			
			EditorGUILayout.Space();
			
			EditorGUILayout.HelpBox("The Moon's size can be adjust on a scale of 1 to 15. This will change the default setting size of 3.5 to whatever value you use on with slider. ", MessageType.Info, true);
			
			EditorGUILayout.Space();
			EditorGUILayout.Space();
		}
		
		self.customMoonRotation = EditorGUILayout.Toggle ("Customize Moon Rotation?",self.customMoonRotation);
		
		if (self.customMoonRotation)
		{
			self.moonRotationY = EditorGUILayout.Slider ("Moon Rotation", self.moonRotationY, 0, 360);
			
			EditorGUILayout.Space();
			
			EditorGUILayout.HelpBox("The Moon's rotation, on the Z Axis, can be adjust on a scale of 0 to 360. This will change the default setting rotation of 0 to whatever value you use on with slider. The Z Axis adjusts which direction the bright side of the moon faces. ", MessageType.Info, true);
			
			EditorGUILayout.Space();
		}
		
		EditorGUILayout.Space();
		
		editorMoonPhase = (MoonPhaseDropDown)self.moonPhaseCalculator;
		editorMoonPhase = (MoonPhaseDropDown)EditorGUILayout.EnumPopup("Moon Phase", editorMoonPhase);
		self.moonPhaseCalculator = (int)editorMoonPhase;
		
		
		//Weather Particle Slider Adjustments Rain
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Precipitation Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Precipitation Options allow you to set a max number for weather that uses particles. This is useful for keeping draw calls low and keeping the frame rate high. Each game is different so these options are completely customizable.", MessageType.None, true);
		}
		
		EditorGUILayout.Space();
		
		self.randomizedPrecipitation = EditorGUILayout.Toggle ("Randomize Precipitation?",self.randomizedPrecipitation);
		
		EditorGUILayout.Space();
		
		if (self.randomizedPrecipitation)
		{
			EditorGUILayout.HelpBox("Selecting Randomize Precipitation generates new precipitation maxes for every storm. While Randomize Precipitation is selected the maxes below are the caps of the max possible precipitation generation for that weather type.", MessageType.Info, true);
		}
		
		EditorGUILayout.Space();
		
		self.useRainStreaks = EditorGUILayout.Toggle ("Use Rain Streaks?",self.useRainStreaks);
		
		if (self.useRainStreaks)
		{
			EditorGUILayout.HelpBox("While Use Rain Streaks is enabled UniStorm will use the rain streaks particle effect to simulate rain streaks during the heavy rain precipitation weather types.", MessageType.Info, true);
		}
		
		EditorGUILayout.Space();
		
		self.UseRainMist = EditorGUILayout.Toggle ("Use Rain Mist?",self.UseRainMist);
		
		if (self.UseRainMist)
		{
			EditorGUILayout.HelpBox("While Use Rain Mist is enabled UniStorm will use the rain mist particle effect to simulate windy rain during the heavy rain precipitation weather types.", MessageType.Info, true);
		}
		
		EditorGUILayout.Space();
		
		self.UseRainSplashes = EditorGUILayout.Toggle ("Use Rain Splashes?",self.UseRainSplashes);
		
		if (self.UseRainSplashes)
		{
			EditorGUILayout.HelpBox("When using Rain Splashes UniStorm will have splashes spawn where the rain collisions hit. This allows rain splashes to collide with objects and create splash effects.", MessageType.Info, true);
		}
		
		EditorGUILayout.Space();
		
		self.stormControl = EditorGUILayout.Toggle ("Use Precipitation Control?",self.stormControl);
		
		EditorGUILayout.Space();
		
		if (self.stormControl)
		{
			self.forceWeatherChange = EditorGUILayout.IntSlider ("Change Weather Days", (int)self.forceWeatherChange, 1, 7);
			
			EditorGUILayout.HelpBox("When using Precipitation Control UniStorm will change the weather after the set amount of consecutive stormy days has been reached. This is helpful to help control (in rare cases) it raining or snowing for too long.", MessageType.Info, true);
		}
		
		EditorGUILayout.Space();
		
		EditorGUILayout.Space();
		
		self.maxLightRainIntensity = EditorGUILayout.IntSlider ("Light Rain Intensity", (int)self.maxLightRainIntensity, 1, 500);
		self.maxLightRainMistCloudsIntensity = EditorGUILayout.IntSlider ("Light Rain Mist Intensity", (int)self.maxLightRainMistCloudsIntensity, 0, 6);
		self.maxStormRainIntensity = EditorGUILayout.IntSlider ("Heavy Rain Intensity", (int)self.maxStormRainIntensity, 1, 5000);
		self.maxStormMistCloudsIntensity = EditorGUILayout.IntSlider ("Heavy Rain Streaks Intensity", (int)self.maxStormMistCloudsIntensity, 0, 50);
		self.maxHeavyRainMistIntensity = EditorGUILayout.IntSlider ("Heavy Rain Mist Intensity", (int)self.maxHeavyRainMistIntensity, 0, 50);
		
		//Weather Particle Slider Adjustments Snow
		self.maxLightSnowIntensity = EditorGUILayout.IntSlider ("Light Snow Intensity", (int)self.maxLightSnowIntensity, 1, 500);
		self.maxLightSnowDustIntensity = EditorGUILayout.IntSlider ("Light Snow Dust Intensity", (int)self.maxLightSnowDustIntensity, 0, 20);
		self.maxSnowStormIntensity = EditorGUILayout.IntSlider ("Heavy Snow Intensity", (int)self.maxSnowStormIntensity, 1, 3000);
		self.maxHeavySnowDustIntensity = EditorGUILayout.IntSlider ("Heavy Snow Dust Intensity", (int)self.maxHeavySnowDustIntensity, 0, 50);
		
		EditorGUILayout.Space();
		
		self.useCustomPrecipitationSounds = EditorGUILayout.Toggle ("Use Custom Sounds?",self.useCustomPrecipitationSounds);
		
		if (self.useCustomPrecipitationSounds)
		{
			EditorGUILayout.Space();
			
			EditorGUILayout.HelpBox("While Use Custom Sounds is enabled UniStorm will use these sounds for the precipitation noises instead of UniStorm's default sounds. If the audio slots below are empty no sounds will play during precipiation weather types.", MessageType.Info, true);
			
			
			bool customRainSound = !EditorUtility.IsPersistent (self);
			self.customRainSound = (AudioClip)EditorGUILayout.ObjectField ("Rain Sound", self.customRainSound, typeof(AudioClip), customRainSound);
			
			bool customRainWindSound = !EditorUtility.IsPersistent (self);
			self.customRainWindSound = (AudioClip)EditorGUILayout.ObjectField ("Rain Wind Sound", self.customRainWindSound, typeof(AudioClip), customRainWindSound);
			
			bool customSnowWindSound = !EditorUtility.IsPersistent (self);
			self.customSnowWindSound = (AudioClip)EditorGUILayout.ObjectField ("Snow Wind Sound", self.customSnowWindSound, typeof(AudioClip), customSnowWindSound);
		}
		
		
		//Bools
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Enable Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("These options allow you to enable or disable certain features of UniStorm. Time Stopped will stop UniStorm's time and sun from moving, but will allow the clouds to keep animating. Static Weather will stop the weather from ever changing making it static. However, you can still change it manully.", MessageType.None, true);
		}
		
		self.timeStopped = EditorGUILayout.Toggle ("Time Stopped",self.timeStopped);
		self.staticWeather = EditorGUILayout.Toggle ("Static Weather",self.staticWeather);
		
		//GUI Options
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("GUI Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("GUI Options are useful for development and can be enabled and disabled in-game by pressing F12, or for mobile devices pressing 2 fingers on the screen and 3 for disabling it. The checkboxes below control what is turned on when the GUI Options are enabled. If you don't want either on unckeck both checkboxes.", MessageType.None, true);
		}
		
		self.timeScrollBarUseable = EditorGUILayout.Toggle ("Time Scroll Bar",self.timeScrollBarUseable);
		self.weatherCommandPromptUseable = EditorGUILayout.Toggle ("WCPS Enabled",self.weatherCommandPromptUseable);
		
		//Sound Manager Options
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Sound Manager Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("The Sound Manager allows you to set an array of sounds that will play dynamically for each time of each day according to the min and max seconds set within the editor (One for morning, day, evening, and night) An example for this could be birds in the morning and evening, wind during the day, and crickets at night. UniStorm will pick from a selection of up to 20 sounds (for each time of day) that will play throughout the day and night. You can choose to enable or disable sounds for each time of day using the checkboxes below.", MessageType.None, true);
		}
		
		self.timeToWaitMin = EditorGUILayout.IntField ("Min Wait Time", self.timeToWaitMin);
		self.timeToWaitMax = EditorGUILayout.IntField ("Max Wait Time", self.timeToWaitMax);
		
		EditorGUILayout.Space();
		
		self.useMorningSounds = EditorGUILayout.Toggle ("Use Morning Sounds?",self.useMorningSounds);
		self.useDaySounds = EditorGUILayout.Toggle ("Use Day Sounds?",self.useDaySounds);
		self.useEveningSounds = EditorGUILayout.Toggle ("Use Evening Sounds?",self.useEveningSounds);
		self.useNightSounds = EditorGUILayout.Toggle ("Use Night Sounds?",self.useNightSounds);
		
		EditorGUILayout.Space();
		
		//Sound Manager Lists
		//Morning
		
		if (self.useMorningSounds)
		{
			
			EditorGUILayout.BeginVertical ();
			self.morningSize = EditorGUILayout.IntSlider("Morning Sound Size", self.morningSize, 1, 20);
			
			EditorGUILayout.Space();
			
			if(self.morningSize > self.foldOutList.Count)              //If the counter is greater then foldout count
			{
				var temp = (self.morningSize - self.foldOutList.Count);
				for(int jmorning = 0; jmorning < temp ; jmorning++)
					self.foldOutList.Add(true);                      
			}
			
			if(self.morningSize > self.ambientSoundsMorning.Count)               //If the Slider is higher add more elements.   
			{
				var temp1 = self.morningSize - self.ambientSoundsMorning.Count;
				for(int jmorning = 0; jmorning < temp1 ; jmorning++)
				{
					self.ambientSoundsMorning.Add(new AudioClip() );    //Add a new Audio Clip
				}
			}
			
			if(self.ambientSoundsMorning.Count > self.morningSize)
			{
				self.ambientSoundsMorning.RemoveRange( (self.morningSize), self.ambientSoundsMorning.Count - (self.morningSize)); // If the list is longer then the set morningSize         
				self.foldOutList.RemoveRange( (self.morningSize), self.foldOutList.Count-(self.morningSize));
			}
			
			for(int imorning = 0; imorning < self.ambientSoundsMorning.Count; imorning++)
			{                   
				self.ambientSoundsMorning[imorning] = (AudioClip)EditorGUILayout.ObjectField("Morning Sound " + imorning + ":" , self.ambientSoundsMorning[imorning], typeof(AudioClip), true );
				GUILayout.Space(10);
			}
			EditorGUILayout.EndVertical ();
		}
		
		if (self.useDaySounds)
		{
			//Day
			EditorGUILayout.BeginVertical ();
			self.daySize = EditorGUILayout.IntSlider("Day Sound Size", self.daySize, 1, 20);
			
			EditorGUILayout.Space();
			
			if(self.daySize > self.foldOutList.Count)              //If the counter is greater then foldout count
			{
				var temp2 = (self.daySize - self.foldOutList.Count);
				for(int jday = 0; jday < temp2 ; jday++)
					self.foldOutList.Add(true);                      
			}
			
			if(self.daySize > self.ambientSoundsDay.Count)               //If the Slider is higher add more elements.   
			{
				var temp3 = self.daySize - self.ambientSoundsDay.Count;
				for(int jday = 0; jday < temp3 ; jday++)
				{
					self.ambientSoundsDay.Add(new AudioClip() );    //Add a new Audio Clip
				}
			}
			
			if(self.ambientSoundsDay.Count > self.daySize)
			{
				self.ambientSoundsDay.RemoveRange( (self.daySize), self.ambientSoundsDay.Count - (self.daySize)); // If the list is longer then the set daySize         
				self.foldOutList.RemoveRange( (self.daySize), self.foldOutList.Count-(self.daySize));
			}
			
			for(int iday = 0; iday < self.ambientSoundsDay.Count; iday++)
			{                   
				self.ambientSoundsDay[iday] = (AudioClip)EditorGUILayout.ObjectField("Day Sound " + iday + ":" , self.ambientSoundsDay[iday], typeof(AudioClip), true );
				GUILayout.Space(10);
			}
			EditorGUILayout.EndVertical ();		
		}
		
		if (self.useEveningSounds)
		{
			//Evening
			EditorGUILayout.BeginVertical ();
			self.eveningSize = EditorGUILayout.IntSlider("Evening Sound Size", self.eveningSize, 1, 20);
			
			EditorGUILayout.Space();
			
			if(self.eveningSize > self.foldOutList.Count)              //If the counter is greater then foldout count
			{
				var temp4 = (self.eveningSize - self.foldOutList.Count);
				for(int jevening = 0; jevening < temp4 ; jevening++)
					self.foldOutList.Add(true);                      
			}
			
			if(self.eveningSize > self.ambientSoundsEvening.Count)               //If the Slider is higher add more elements.   
			{
				var temp5 = self.eveningSize - self.ambientSoundsEvening.Count;
				for(int jevening = 0; jevening < temp5 ; jevening++)
				{
					self.ambientSoundsEvening.Add(new AudioClip() );    //Add a new Audio Clip
				}
			}
			
			if(self.ambientSoundsEvening.Count > self.eveningSize)
			{
				self.ambientSoundsEvening.RemoveRange( (self.eveningSize), self.ambientSoundsEvening.Count - (self.eveningSize)); // If the list is longer then the set eveningSize         
				self.foldOutList.RemoveRange( (self.eveningSize), self.foldOutList.Count-(self.eveningSize));
			}
			
			for(int ievening = 0; ievening < self.ambientSoundsEvening.Count; ievening++)
			{                   
				self.ambientSoundsEvening[ievening] = (AudioClip)EditorGUILayout.ObjectField("Evening Sound " + ievening + ":" , self.ambientSoundsEvening[ievening], typeof(AudioClip), true );
				GUILayout.Space(10);
			}
			EditorGUILayout.EndVertical ();
		}
		
		if (self.useNightSounds)
		{
			//Night
			EditorGUILayout.BeginVertical ();
			self.nightSize = EditorGUILayout.IntSlider("Night Sound Size", self.nightSize, 1, 20);
			
			EditorGUILayout.Space();
			
			if(self.nightSize > self.foldOutList.Count)              //If the counter is greater then foldout count
			{
				var temp6 = (self.nightSize - self.foldOutList.Count);
				for(int jnight = 0; jnight < temp6 ; jnight++)
					self.foldOutList.Add(true);                      
			}
			
			if(self.nightSize > self.ambientSoundsNight.Count)               //If the Slider is higher add more elements.   
			{
				var temp7 = self.nightSize - self.ambientSoundsNight.Count;
				for(int jnight = 0; jnight < temp7 ; jnight++)
				{
					self.ambientSoundsNight.Add(new AudioClip() );    //Add a new Audio Clip
				}
			}
			
			if(self.ambientSoundsNight.Count > self.nightSize)
			{
				self.ambientSoundsNight.RemoveRange( (self.nightSize), self.ambientSoundsNight.Count - (self.nightSize)); // If the list is longer then the set nightSize         
				self.foldOutList.RemoveRange( (self.nightSize), self.foldOutList.Count-(self.nightSize));
			}
			
			for(int inight = 0; inight < self.ambientSoundsNight.Count; inight++)
			{                   
				self.ambientSoundsNight[inight] = (AudioClip)EditorGUILayout.ObjectField("Night Sound " + inight + ":" , self.ambientSoundsNight[inight], typeof(AudioClip), true );
				GUILayout.Space(10);
			}
			EditorGUILayout.EndVertical ();		
		}
		
		//Ambient Light Colors
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Color Options", EditorStyles.boldLabel);
		
		if (showHelpOptions == true)
		{
			EditorGUILayout.HelpBox("Here you control every color component UniStorm uses. There is one for Morning, Day, Evening, and Night. UniStorm will seamlessly transition to each time of day using the colors you have set for the time of day.", MessageType.None, true);
		}
		
		self.cloudColorMorning = EditorGUILayout.ColorField("Clouds Morning", self.cloudColorMorning);
		self.cloudColorDay = EditorGUILayout.ColorField("Clouds Day", self.cloudColorDay);
		self.cloudColorEvening = EditorGUILayout.ColorField("Clouds Evening", self.cloudColorEvening);
		self.cloudColorNight = EditorGUILayout.ColorField("Clouds Night", self.cloudColorNight);

		EditorGUILayout.Space();
		EditorGUILayout.Space();
		
		self.MorningAmbientLight = EditorGUILayout.ColorField("Ambient Morning", self.MorningAmbientLight);
		self.MiddayAmbientLight = EditorGUILayout.ColorField("Ambient Day", self.MiddayAmbientLight);
		self.DuskAmbientLight = EditorGUILayout.ColorField("Ambient Evening", self.DuskAmbientLight);
		self.NightAmbientLight = EditorGUILayout.ColorField("Ambient Night", self.NightAmbientLight);
		
		//Sun Colors
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		self.SunMorning = EditorGUILayout.ColorField("Sun Morning", self.SunMorning);
		self.SunDay = EditorGUILayout.ColorField("Sun Day", self.SunDay);
		self.SunDusk = EditorGUILayout.ColorField("Sun Evening", self.SunDusk);
		self.SunNight = EditorGUILayout.ColorField("Sun Night", self.SunNight);
		
		//self.glowMorning = EditorGUILayout.ColorField("Glow Morning", self.glowMorning);
		//self.glowDay = EditorGUILayout.ColorField("Glow Day", self.glowDay);
		//self.glowDusk = EditorGUILayout.ColorField("Glow Evening", self.glowDusk);
		//self.glowNight = EditorGUILayout.ColorField("Glow Night", self.glowNight);
		
		//EditorGUILayout.Space();
		//EditorGUILayout.Space();
		//self.MorningGradientLight = EditorGUILayout.ColorField("Morning Sunrise Light", self.MorningGradientLight);
		//self.DayGradientLight = EditorGUILayout.ColorField("Day Gradient Light", self.DayGradientLight);
		//self.DuskGradientLight = EditorGUILayout.ColorField("Evening Sunset Light", self.DuskGradientLight);
		//self.NightGradientLight = EditorGUILayout.ColorField("Night Gradient Light", self.NightGradientLight);
		
		//EditorGUILayout.Space();
		//EditorGUILayout.Space();
		//self.MorningGradientContrastLight = EditorGUILayout.ColorField("Morning Gradient Contrast Light", self.MorningGradientContrastLight);
		//self.DayGradientContrastLight = EditorGUILayout.ColorField("Day Gradient Contrast Light", self.DayGradientContrastLight);
		//self.DuskGradientContrastLight = EditorGUILayout.ColorField("Evening Gradient Contrast Light", self.DuskGradientContrastLight);
		//self.NightGradientContrastLight = EditorGUILayout.ColorField("Night Gradient Contrast Light", self.NightGradientContrastLight);
		
		//Normal Fog Color
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		self.fogMorningColor = EditorGUILayout.ColorField("Fog Morning", self.fogMorningColor);
		self.fogDayColor = EditorGUILayout.ColorField("Fog Day", self.fogDayColor);
		self.fogDuskColor = EditorGUILayout.ColorField("Fog Evening", self.fogDuskColor);
		self.fogNightColor = EditorGUILayout.ColorField("Fog Night", self.fogNightColor);
		
		//Added 1.8.1
		//Storm Fog Color
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		self.stormyFogColorMorning = EditorGUILayout.ColorField("Stormy Fog Morning", self.stormyFogColorMorning);
		self.stormyFogColorDay = EditorGUILayout.ColorField("Stormy Fog Day", self.stormyFogColorDay);
		self.stormyFogColorEvening = EditorGUILayout.ColorField("Stormy Fog Evening", self.stormyFogColorEvening);
		self.stormyFogColorNight = EditorGUILayout.ColorField("Stormy Fog Night", self.stormyFogColorNight);
		
		//Skybox Tint Color
		//EditorGUILayout.Space();
		//EditorGUILayout.Space();
		//self.MorningSkyboxTint = EditorGUILayout.ColorField("Skybox Morning", self.MorningSkyboxTint);
		//self.MiddaySkyboxTint = EditorGUILayout.ColorField("Skybox Day", self.MiddaySkyboxTint);
		//self.DuskSkyboxTint = EditorGUILayout.ColorField("Skybox Evening", self.DuskSkyboxTint);
		//self.NightSkyboxTint = EditorGUILayout.ColorField("Skybox Night", self.NightSkyboxTint);
		
		//Added 1.8.1
		//Skybox Contrast Color
		//EditorGUILayout.Space();
		//EditorGUILayout.Space();
		//self.MorningSkyboxTintContrast = EditorGUILayout.ColorField("Skybox Contrast Morning", self.MorningSkyboxTintContrast);
		//self.MiddaySkyboxTintContrast = EditorGUILayout.ColorField("Skybox Contrast Day", self.MiddaySkyboxTintContrast);
		//self.DuskSkyboxTintContrast = EditorGUILayout.ColorField("Skybox Contrast Evening", self.DuskSkyboxTintContrast);
		//self.NightSkyboxTintContrast = EditorGUILayout.ColorField("Skybox Contrast Night", self.NightSkyboxTintContrast);
		
		//Atmospheric Light Color
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		self.MorningAtmosphericLight = EditorGUILayout.ColorField("Atmospheric Morning", self.MorningAtmosphericLight);
		self.MiddayAtmosphericLight = EditorGUILayout.ColorField("Atmospheric Day", self.MiddayAtmosphericLight);
		self.DuskAtmosphericLight = EditorGUILayout.ColorField("Atmospheric Evening", self.DuskAtmosphericLight);

		//Global Fog Colors
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		self.stormyFogColorDay_GF = EditorGUILayout.ColorField("Stormy Global Fog Day", self.stormyFogColorDay_GF);
		self.stormyFogColorDuskDawn_GF = EditorGUILayout.ColorField("Stormy Global Fog Morning/Evening", self.stormyFogColorDuskDawn_GF);
		self.stormyFogColorNight_GF = EditorGUILayout.ColorField("Stormy Global Fog Night", self.stormyFogColorNight_GF);
		
		//Star Brightness
		EditorGUILayout.Space();
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Fade Colors", EditorStyles.boldLabel);
		self.starBrightness = EditorGUILayout.ColorField("Star Brightness", self.starBrightness);
		self.moonFadeColor = EditorGUILayout.ColorField("Moon Fade Color", self.moonFadeColor);
		self.moonColorFade = EditorGUILayout.ColorField("Dark Side Moon", self.moonColorFade);
		
		//Terrain Object Removed as of 1.6.3 until 1.6.4
		//bool snowScript = !EditorUtility.IsPersistent (self);
		//self.snowObject = (GameObject)EditorGUILayout.ObjectField ("Snow Object", self.snowObject, typeof(GameObject), snowScript);
		
		EditorGUILayout.Space();
		
		/*
		string showOrHide = "Show";
		if(showAdvancedOptions)
			showOrHide = "Hide";
    	if(GUILayout.Button(showOrHide+ " Object Fields", GUILayout.Width(thirdOfScreen*2), GUILayout.Height(sizeOfHideButtons)) )
		{
			showAdvancedOptions = !showAdvancedOptions;
		}
		*/
		
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Object Fields", EditorStyles.boldLabel);
		
		
		if (showAdvancedOptions == false)
		{
			EditorGUILayout.HelpBox("The viewing of the Object Fields have been disabled. You can enabled them in the Editor Options of the UniStorm Editor.", MessageType.None, true);
		}
		
		if(showAdvancedOptions)
		{
			
			if (showHelpOptions == true)
			{
				EditorGUILayout.HelpBox("Here is where all object related UniStorm objects are kept. All components are already applied. If you are missing a component you will be notified with Error Log that will tell you how to fix it. If you are using custom objects refer to UniStorm's Documentation.", MessageType.None, true);
			}
			
			//Sun Objects
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Light Components", EditorStyles.boldLabel);
			bool sunObject = !EditorUtility.IsPersistent (self);
			self.sun = (Light)EditorGUILayout.ObjectField ("Sun Light", self.sun, typeof(Light), sunObject);
			
			bool moonLight = !EditorUtility.IsPersistent (self);
			self.moon = (Light)EditorGUILayout.ObjectField ("Moon Light", self.moon, typeof(Light), moonLight);
			
			bool lightSource = !EditorUtility.IsPersistent (self);
			self.lightSource = (Light)EditorGUILayout.ObjectField ("Light Source", self.lightSource, typeof(Light), lightSource);
			
			//Weather Particle Effects
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Particle Systems", EditorStyles.boldLabel);
			
			bool rainObject = !EditorUtility.IsPersistent (self);
			self.rain = (ParticleSystem)EditorGUILayout.ObjectField ("Rain Particle System", self.rain, typeof(ParticleSystem), rainObject);
			
			bool splashObject = !EditorUtility.IsPersistent (self);
			self.rainSplashes = (ParticleSystem)EditorGUILayout.ObjectField ("Rain Splash System", self.rainSplashes, typeof(ParticleSystem), splashObject);
			
			bool mistFogObject = !EditorUtility.IsPersistent (self);
			self.mistFog = (GameObject)EditorGUILayout.ObjectField ("Rain Streaks Particle System", self.mistFog, typeof(GameObject), mistFogObject);
			
			bool windyRainObject = !EditorUtility.IsPersistent (self);
			self.rainMist = (ParticleSystem)EditorGUILayout.ObjectField ("Rain Mist Particle System", self.rainMist, typeof(ParticleSystem), windyRainObject);
			
			bool snowObject = !EditorUtility.IsPersistent (self);
			self.snow = (ParticleSystem)EditorGUILayout.ObjectField ("Snow Particle System", self.snow, typeof(ParticleSystem), snowObject);
			
			bool snowMistFogObject = !EditorUtility.IsPersistent (self);
			self.snowMistFog = (ParticleSystem)EditorGUILayout.ObjectField ("Snow Dust Particle System", self.snowMistFog, typeof(ParticleSystem), snowMistFogObject);
			
			bool butterflieObject = !EditorUtility.IsPersistent (self);
			self.butterflies = (GameObject)EditorGUILayout.ObjectField ("Butterflies Particle System", self.butterflies, typeof(GameObject), butterflieObject);
			
			bool windyLeavesObject = !EditorUtility.IsPersistent (self);
			self.windyLeaves = (ParticleSystem)EditorGUILayout.ObjectField ("Windy Leaves Particle System", self.windyLeaves, typeof(ParticleSystem), windyLeavesObject);
			
			
			//Sound Objects
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Sound Components", EditorStyles.boldLabel);
			
			bool rainSoundObject = !EditorUtility.IsPersistent (self);
			self.rainSound = (GameObject)EditorGUILayout.ObjectField ("Rain Sound Object", self.rainSound, typeof(GameObject), rainSoundObject);
			
			bool windSoundObject = !EditorUtility.IsPersistent (self);
			self.windSound = (GameObject)EditorGUILayout.ObjectField ("Wind Rain Sound Object", self.windSound, typeof(GameObject), windSoundObject);
			
			bool windSnowSoundObject = !EditorUtility.IsPersistent (self);
			self.windSnowSound = (GameObject)EditorGUILayout.ObjectField ("Wind Snow Sound Object", self.windSnowSound, typeof(GameObject), windSnowSoundObject);
			
			//var nightSoundObject : boolean = !EditorUtility.IsPersistent (self);
			//self.nightSound = EditorGUILayout.ObjectField ("Night Sound Object", self.nightSound, GameObject, nightSoundObject);
			
			
			
			//Sky Objects
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Sky Components", EditorStyles.boldLabel);
			
			bool starObject = !EditorUtility.IsPersistent (self);
			self.starSphere = (GameObject)EditorGUILayout.ObjectField ("Star Sphere", self.starSphere, typeof(GameObject), starObject);
			
			bool gradientSphere = !EditorUtility.IsPersistent (self);
			self.gradientSphere = (GameObject)EditorGUILayout.ObjectField ("Gradient Sphere", self.gradientSphere, typeof(GameObject), gradientSphere);
			
			bool moon = !EditorUtility.IsPersistent (self);
			self.moonObject = (GameObject)EditorGUILayout.ObjectField ("Moon Object", self.moonObject, typeof(GameObject), moon);
			
			//bool horizon = !EditorUtility.IsPersistent (self);
			//self.horizonObject = (GameObject)EditorGUILayout.ObjectField ("Horizon Object", self.horizonObject, typeof(GameObject), horizon);
			
			//Cloud Objects
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Cloud Objects", EditorStyles.boldLabel);
			
			bool cloud1  = !EditorUtility.IsPersistent (self);
			self.lightClouds1 = (GameObject)EditorGUILayout.ObjectField ("Dynamic Light Clouds 1", self.lightClouds1, typeof(GameObject), cloud1);
			
			bool cloud1a  = !EditorUtility.IsPersistent (self);
			self.lightClouds1a = (GameObject)EditorGUILayout.ObjectField ("Dynamic Light Clouds 2", self.lightClouds1a, typeof(GameObject), cloud1a);	

			bool partlyCloudy1  = !EditorUtility.IsPersistent (self);
			self.partlyCloudyClouds1 = (GameObject)EditorGUILayout.ObjectField ("Dynamic Partly Cloudy Clouds 1", self.partlyCloudyClouds1, typeof(GameObject), partlyCloudy1);

			bool partlyCloudy2  = !EditorUtility.IsPersistent (self);
			self.partlyCloudyClouds2 = (GameObject)EditorGUILayout.ObjectField ("Dynamic Partly Cloudy Clouds 2", self.partlyCloudyClouds2, typeof(GameObject), partlyCloudy2);
			
			bool cloud2  = !EditorUtility.IsPersistent (self);
			self.lightClouds2 = (GameObject)EditorGUILayout.ObjectField ("Non-Dynamic Light Clouds", self.lightClouds2, typeof(GameObject), cloud2);
			
			bool cloud3  = !EditorUtility.IsPersistent (self);
			self.lightClouds3 = (GameObject)EditorGUILayout.ObjectField ("Light Clouds 3", self.lightClouds3, typeof(GameObject), cloud3);
			
			bool cloud4  = !EditorUtility.IsPersistent (self);
			self.lightClouds4 = (GameObject)EditorGUILayout.ObjectField ("Light Clouds 4", self.lightClouds4, typeof(GameObject), cloud4);
			
			bool cloud5  = !EditorUtility.IsPersistent (self);
			self.lightClouds5 = (GameObject)EditorGUILayout.ObjectField ("Light Clouds 5", self.lightClouds5, typeof(GameObject), cloud5);
			
			bool highcloud1  = !EditorUtility.IsPersistent (self);
			self.highClouds1 = (GameObject)EditorGUILayout.ObjectField ("High Clouds 1", self.highClouds1, typeof(GameObject), highcloud1);
			
			bool highcloud2  = !EditorUtility.IsPersistent (self);
			self.highClouds2 = (GameObject)EditorGUILayout.ObjectField ("High Clouds 2", self.highClouds2, typeof(GameObject), highcloud2);
			
			bool mostlyCloudy  = !EditorUtility.IsPersistent (self);
			self.mostlyCloudyClouds = (GameObject)EditorGUILayout.ObjectField ("Mostly Cloudy Clouds", self.mostlyCloudyClouds, typeof(GameObject), mostlyCloudy);
			
			//Heavy Cloud Objects
			bool storm1  = !EditorUtility.IsPersistent (self);
			self.heavyClouds = (GameObject)EditorGUILayout.ObjectField ("Base Storm Clouds", self.heavyClouds, typeof(GameObject), storm1);
			
			bool storm2  = !EditorUtility.IsPersistent (self);
			self.heavyCloudsLayer1 = (GameObject)EditorGUILayout.ObjectField ("Non-Dynamic Storm Clouds", self.heavyCloudsLayer1, typeof(GameObject), storm2);
			
			bool storm3  = !EditorUtility.IsPersistent (self);
			self.heavyCloudsLayerLight = (GameObject)EditorGUILayout.ObjectField ("Dynamic Storm Clouds", self.heavyCloudsLayerLight, typeof(GameObject), storm3);
			
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Unity Components", EditorStyles.boldLabel);
			
			//Camera Object
			bool cameraThingObject = !EditorUtility.IsPersistent (self);
			self.cameraThing = (GameObject)EditorGUILayout.ObjectField ("Camera Object", self.cameraThing, typeof(GameObject), cameraThingObject);
			
			bool windZoneObject = !EditorUtility.IsPersistent (self);
			self.windZone = (GameObject)EditorGUILayout.ObjectField ("Wind Zone", self.windZone, typeof(GameObject), windZoneObject);	
			
			//Skybox Materials
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Skybox Materials", EditorStyles.boldLabel);
			
			bool allowMaterial1  = !EditorUtility.IsPersistent (self);
			self.SkyBoxMaterial1 = (Material)EditorGUILayout.ObjectField ("Skybox Material 1", self.SkyBoxMaterial1, typeof(Material), allowMaterial1);
			
			bool allowMaterial2  = !EditorUtility.IsPersistent (self);
			self.SkyBoxMaterial2 = (Material)EditorGUILayout.ObjectField ("Skybox Material 2", self.SkyBoxMaterial2, typeof(Material), allowMaterial2);
			
			EditorGUILayout.Space();
			EditorGUILayout.LabelField("Moon Phase Materials", EditorStyles.boldLabel);
			
			bool moonPhaseMat1  = !EditorUtility.IsPersistent (self);
			self.moonPhase1 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 1", self.moonPhase1, typeof(Material), moonPhaseMat1);
			
			bool moonPhaseMat2  = !EditorUtility.IsPersistent (self);
			self.moonPhase2 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 2", self.moonPhase2, typeof(Material), moonPhaseMat2);
			
			bool moonPhaseMat3  = !EditorUtility.IsPersistent (self);
			self.moonPhase3 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 3", self.moonPhase3, typeof(Material), moonPhaseMat3);	
			
			bool moonPhaseMat4  = !EditorUtility.IsPersistent (self);
			self.moonPhase4 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 4", self.moonPhase4, typeof(Material), moonPhaseMat4);
			
			bool moonPhaseMat5  = !EditorUtility.IsPersistent (self);
			self.moonPhase5 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 5", self.moonPhase5, typeof(Material), moonPhaseMat5);
			
			bool moonPhaseMat6  = !EditorUtility.IsPersistent (self);
			self.moonPhase6 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 6", self.moonPhase6, typeof(Material), moonPhaseMat6);
			
			bool moonPhaseMat7  = !EditorUtility.IsPersistent (self);
			self.moonPhase7 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 7", self.moonPhase7, typeof(Material), moonPhaseMat7);
			
			bool moonPhaseMat8  = !EditorUtility.IsPersistent (self);
			self.moonPhase8 = (Material)EditorGUILayout.ObjectField ("Moon Phase Material 8", self.moonPhase8, typeof(Material), moonPhaseMat8);
			
			
		}
		
		GUILayout.BeginHorizontal();
		
		
		GUILayout.EndHorizontal();

		//Added 1.8.2
		//UniStorm will no longer revert to prefab settings
		if (GUI.changed) 
		{ 
			EditorUtility.SetDirty(self); 
		}

	}
	
}