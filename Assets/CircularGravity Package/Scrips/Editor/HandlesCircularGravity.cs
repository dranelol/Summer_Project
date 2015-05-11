/*******************************************************************************************
 * Author: Lane Gresham, AKA LaneMax
 * Websites: http://resurgamstudios.com http://lanemax.blogspot.com/
 * Version: 2.75
 * Created Date: 11/27/14
 * Last Updated: 11/27/14
 *  
 *  Description: 
 *      Draws the Gizmo of the selected CircularGravity in the editor.
 *      
*******************************************************************************************/
using UnityEditor;
using UnityEngine;
using System.Collections;
using CircularGravityForce;

[CustomEditor(typeof(CircularGravity))]
public class HandlesCircularGravity : Editor
{
    private CircularGravity cgf;
    
    void OnSceneGUI()
    {
        cgf = (CircularGravity)target;

        Plane plane = new Plane(Camera.current.transform.forward, Camera.current.transform.position);
        float dist = plane.GetDistanceToPoint(cgf.transform.position);
        Vector3 drawScale = Vector3.zero;

        if (!Camera.current.orthographic)
        {
            drawScale = Vector3.one * dist * .025f;
        }
        else
        {
            drawScale = Vector3.one;
        }

        Color mainColor;
        Color tranMainColor;
        if (cgf.forcePower == 0)
        {
            mainColor = Color.white;
            tranMainColor = Color.white;
        }
        else if (cgf.forcePower > 0)
        {
            mainColor = Color.green;
            tranMainColor = Color.green;
        }
        else
        {
            mainColor = Color.red;
            tranMainColor = Color.red;
        }

        tranMainColor.a = .1f;

        Handles.color = mainColor;

        float arrowSize = cgf.size / 4;

        Quaternion qUp = cgf.transform.transform.rotation;
        qUp.SetLookRotation(cgf.transform.rotation * Vector3.up);
        Quaternion qDown = cgf.transform.transform.rotation;
        qDown.SetLookRotation(cgf.transform.rotation * Vector3.down);
        Quaternion qLeft = cgf.transform.transform.rotation;
        qLeft.SetLookRotation(cgf.transform.rotation * Vector3.left);
        Quaternion qRight = cgf.transform.transform.rotation;
        qRight.SetLookRotation(cgf.transform.rotation * Vector3.right);
        Quaternion qForward = cgf.transform.transform.rotation;
        qForward.SetLookRotation(cgf.transform.rotation * Vector3.forward);
        Quaternion qBack = cgf.transform.transform.rotation;
        qBack.SetLookRotation(cgf.transform.rotation * Vector3.back);

        switch (cgf.shape)
        {
            case CircularGravity.Shape.Sphere:

                Handles.color = tranMainColor;
                Handles.SphereCap(0, cgf.transform.position, cgf.transform.rotation, cgf.size * 2);
                Handles.color = mainColor;

                if (mainColor == Color.green)
                {
                    Handles.ArrowCap(0, GetVector(Vector3.up, cgf.size, 4), qUp, arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.down, cgf.size, 4), qDown, arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.left, cgf.size, 4), qLeft, arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.right, cgf.size, 4), qRight, arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.forward, cgf.size, 4), qForward, arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.back, cgf.size, 4), qBack, arrowSize);
                }
                else if (mainColor == Color.red)
                {
                    Handles.ArrowCap(0, GetVector(Vector3.up, cgf.size, 1) - (((cgf.transform.rotation * Vector3.up) * cgf.size) / 2), qUp, -arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.down, cgf.size, 1) - (((cgf.transform.rotation * Vector3.down) * cgf.size) / 2), qDown, -arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.left, cgf.size, 1) - (((cgf.transform.rotation * Vector3.left) * cgf.size) / 2), qLeft, -arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.right, cgf.size, 1) - (((cgf.transform.rotation * Vector3.right) * cgf.size) / 2), qRight, -arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.forward, cgf.size, 1) - (((cgf.transform.rotation * Vector3.forward) * cgf.size) / 2), qForward, -arrowSize);
                    Handles.ArrowCap(0, GetVector(Vector3.back, cgf.size, 1) - (((cgf.transform.rotation * Vector3.back) * cgf.size) / 2), qBack, -arrowSize);
                }
			
                Handles.CircleCap(0, cgf.transform.position, qUp, cgf.size);
                Handles.CircleCap(0, cgf.transform.position, qLeft, cgf.size);
                Handles.CircleCap(0, cgf.transform.position, qForward, cgf.size);

                break;
            case CircularGravity.Shape.Capsule:

                Handles.DrawLine(GetVector(Vector3.up, cgf.capsuleRadius, 1), cgf.transform.position);
                Handles.DrawLine(GetVector(Vector3.down, cgf.capsuleRadius, 1), cgf.transform.position);
                Handles.DrawLine(GetVector(Vector3.left, cgf.capsuleRadius, 1), cgf.transform.position);
                Handles.DrawLine(GetVector(Vector3.right, cgf.capsuleRadius, 1), cgf.transform.position);

                Handles.DrawLine(cgf.transform.position, GetVector(Vector3.forward, cgf.size, 1));

                Handles.DrawLine(GetVector(Vector3.forward, cgf.size, 1) + ((cgf.transform.rotation * Vector3.up) * cgf.capsuleRadius), GetVector(Vector3.forward, cgf.size, 1));
                Handles.DrawLine(GetVector(Vector3.forward, cgf.size, 1) + ((cgf.transform.rotation * Vector3.down) * cgf.capsuleRadius), GetVector(Vector3.forward, cgf.size, 1));
                Handles.DrawLine(GetVector(Vector3.forward, cgf.size, 1) + ((cgf.transform.rotation * Vector3.left) * cgf.capsuleRadius), GetVector(Vector3.forward, cgf.size, 1));
                Handles.DrawLine(GetVector(Vector3.forward, cgf.size, 1) + ((cgf.transform.rotation * Vector3.right) * cgf.capsuleRadius), GetVector(Vector3.forward, cgf.size, 1));

                if (mainColor == Color.green)
                {
                    Handles.ArrowCap(0, GetVector(Vector3.forward, cgf.size, 4), qForward, arrowSize);
                }
                else if (mainColor == Color.red)
                {
                    Handles.ArrowCap(0, GetVector(Vector3.forward, cgf.size, 1) - (((cgf.transform.rotation * Vector3.forward) * cgf.size) / 2), qForward, -arrowSize);
                }

                Handles.CircleCap(0, cgf.transform.position, qForward, cgf.capsuleRadius);
                Handles.CircleCap(0, GetVector(Vector3.forward, cgf.size, 1), qForward, cgf.capsuleRadius);

                break;
            case CircularGravity.Shape.RayCast:

                Handles.DrawLine(cgf.transform.position + ((cgf.transform.rotation * Vector3.forward) * cgf.size), cgf.transform.position);

                if (mainColor == Color.green)
                {
                    Handles.ArrowCap(0, GetVector(Vector3.forward, cgf.size, 4), qForward, arrowSize);
                }
                else if (mainColor == Color.red)
                {
                    Handles.ArrowCap(0, GetVector(Vector3.forward, cgf.size, 1) - (((cgf.transform.rotation * Vector3.forward) * cgf.size) / 2), qForward, -arrowSize);
                }

                break;
        }

        if (cgf.forcePoint != null)
        {
            Handles.SphereCap(0, cgf.forcePoint.transform.position, cgf.transform.rotation, drawScale.x);
        }
        else
        {
            Handles.SphereCap(0, cgf.transform.position, cgf.transform.rotation, drawScale.x);
        }

        if (cgf.forcePoints != null)
        {
            foreach (var forcePoint in cgf.forcePoints)
            {
                if (forcePoint != null)
                {
                    Handles.SphereCap(0, forcePoint.transform.position, cgf.transform.rotation, drawScale.x);
                }
            }
        }

        if (GUI.changed)
        {
            EditorUtility.SetDirty(target);
        }
    }

    Vector3 GetVector(Vector3 vector, float size, float times)
    {
        return cgf.transform.position + (((cgf.transform.rotation * vector) * size) / times);
    }
}
