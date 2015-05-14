using UnityEngine;
using System.Collections;

public class Utilites{
	public static void Audio_Lead_In(AudioSource source){
        source.volume += Time.deltaTime;
	}
}
