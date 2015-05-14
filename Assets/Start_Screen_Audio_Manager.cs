using UnityEngine;
using System.Collections;

public class Start_Screen_Audio_Manager : MonoBehaviour{
    AudioSource currentSource;
	// Use this for initialization
	void Start () {
        currentSource = GetComponent<AudioSource>();
        Utilites.Audio_Lead_In(currentSource);
	}
	
	// Update is called once per frame
	void Update () {
	    
	}
}
