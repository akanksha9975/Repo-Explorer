import React from "react";
import { format } from "date-fns";

export default function Profile(props) {
  return (
    <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 max-w-2xl mx-auto">
      <div className="flex items-start">
        <img
          src={props.owner.avatar_url}
          alt={props.owner.login}
          className="w-20 h-20 rounded-full border-2 border-emerald-200 shadow-md"
        />
        <div className="ml-5 flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <h2 className="font-bold text-2xl text-gray-800">{props.owner.login}</h2>
            <div className="flex gap-2">
              {props.private ? (
                <span className="bg-rose-600 py-1 px-3 rounded-full shadow text-white text-xs font-medium">
                  Private
                </span>
              ) : (
                <span className="bg-emerald-600 py-1 px-3 rounded-full shadow text-white text-xs font-medium">
                  Public
                </span>
              )}
            </div>
          </div>
          
          <h3 className="text-lg text-gray-700 mt-1 font-semibold">{props.name}</h3>
          
          <p className="text-gray-600 mt-3 text-sm">
            Created on {format(new Date(props.created_at), "MMMM do, yyyy")} by{" "}
            <span className="font-medium text-emerald-600">{props.owner.login}</span>
          </p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium">
                {props.stargazers_count.toLocaleString()}
              </span>
              <span className="ml-1 text-gray-500">stars</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-medium">
                {props.watchers_count.toLocaleString()}
              </span>
              <span className="ml-1 text-gray-500">watchers</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-medium">
                {props.open_issues}
              </span>
              <span className="ml-1 text-gray-500">issues</span>
            </div>
          </div>
          
          <a
            className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-800 text-white hover:text-white text-sm font-medium rounded-md shadow transition-colors duration-200"
            href={props.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repository
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {(props.language || props.topics) && (
        <div className="mt-5 pt-5 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-2">
            {props.language && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
                {props.language}
              </span>
            )}
            {props.topics?.map((topic, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}