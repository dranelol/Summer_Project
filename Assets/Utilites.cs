using UnityEngine;
using System.Collections;

public class Utilites{
	public static void Audio_Lead_In(AudioSource source){
        source.volume = 0;
		while(source.volume <= 1){
			source.volume += Time.deltaTime;
		}
	}
}
